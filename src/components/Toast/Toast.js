import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, TouchableOpacity, Dimensions, Animated, Easing } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Ionicons } from '@expo/vector-icons';
import { hideToast } from '../../store/modules/Toast/actions'

const {width} = Dimensions.get('window');

var timer = null;

const Toast = () => {
    const colors = {
        success: '#62D9AD',
        warn: '#FF0000',
        error: '#E91E63',
        default: '#F2F2F2'};

    const [styleStatusBar, setStyleStatusBar] = useState('light-content');
    const [pos] = useState(new Animated.Value(-(getStatusBarHeight()+60)));
    const dispatch = useDispatch();
    const toastfy = useSelector(state => state.toast);

    useEffect(() => {
        toastfy.show && show();
    },[toastfy])

    function show(){
        clearTimeout(timer);
        setStyleStatusBar('light-content');
        Animated.timing(pos, {
            toValue: 0,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear,
        }).start();
        timer = setTimeout(() => {
            hide()
        }, toastfy.duration)
    }

    function hide(){
        Animated.timing(pos, {
            toValue: -(getStatusBarHeight()+60),
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear,
        }).start(() => {
            dispatch(hideToast())
            setStyleStatusBar('light-content')
        });
    }

    return (
        <View style={{zIndex: 100}}>
            <StatusBar 
            barStyle={styleStatusBar} 
            translucent={true} 
            backgroundColor={colors[toastfy.type]}/>
            <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => {
                clearTimeout(timer);
                hide()
            }} 
            style={[styles.default, {backgroundColor: colors[toastfy.type], transform:[{translateY: pos}]}]}>
                <Animated.View>
                    <View style={styles.msgContainer}>
                        {
                            toastfy.iconName != '' && (
                                <Ionicons name={toastfy.iconName} color='#FFF' size={26}/>
                            ) 
                        }
                        <Text style={styles.text}>{toastfy?.message}</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        position: 'absolute',
        width,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        paddingHorizontal: 7,
        paddingBottom: 20,
        paddingTop: getStatusBarHeight() + 7,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    text: {
        color: '#FFF',
        fontSize: 14,
        marginHorizontal: 10,
    },
})

export default Toast
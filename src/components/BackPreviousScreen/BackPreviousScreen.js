import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

const BackPreviousScreen = ({text, onPress}) => {

    const navigation = useNavigation();

    const onBackPressed = () => {
        console.warn('teste')   
        navigation.goBack()
        
    };

    return (
        <View style={styles.container}>
            <Ionicons 
            onPress={onBackPressed}
            style={styles.icon} name="arrow-back-sharp" color={'#62D9AD'} size={32}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        marginVertical: 40,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    icon: {
        marginHorizontal: 8
    },
    text: {
        fontSize: 16,
        color: '#BFBFBF'
    },
    text_clickable: {
        color: "#62D9AD"
    }
});


export default BackPreviousScreen
import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { createRef } from 'react'

const VerificationInput = ({onPress, source, type}) => {
    const firstInput = createRef();
    const secondInput = createRef()
    const thirdInput = createRef()
    const fourthInput = createRef()

    return (
        <View style={styles.container}>
        <View style={styles.inputBox}>
        <TextInput 
        ref={firstInput} 
        onChangeText={(text)=> {
            text && secondInput.current.focus();
        }} 
        style={styles.inputText} 
        keyboardType='number-pad' 
        maxLength={1}/>
        </View>
        <View style={styles.inputBox}>
        <TextInput 
        ref={secondInput} 
        onChangeText={(text)=> {
            text ? thirdInput.current.focus() : firstInput.current.focus();
        }} 
        style={styles.inputText} 
        keyboardType='number-pad' 
        maxLength={1}/>
        </View>
        <View style={styles.inputBox}>
        <TextInput 
        ref={thirdInput} 
        onChangeText={(text)=> {
            text ? fourthInput.current.focus() : secondInput.current.focus();
        }} 
        style={styles.inputText} 
        keyboardType='number-pad' 
        maxLength={1}/>
        </View>
        <View style={styles.inputBox}>
        <TextInput 
        ref={fourthInput} 
        onChangeText={(text)=> {
            !text && thirdInput.current.focus();
        }} 
        style={styles.inputText} 
        keyboardType='number-pad' 
        maxLength={1}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },
    inputBox: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#62d9ad'
    },
    inputText: {
        fontSize: 25,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20
    }
})


export default VerificationInput
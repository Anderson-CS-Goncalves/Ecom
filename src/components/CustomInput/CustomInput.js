import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input} 
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        width: '100%',
        padding: 15,

        borderRadius: 15,

        marginVertical: 5,
    },
    input: {

    },
})

export default CustomInput
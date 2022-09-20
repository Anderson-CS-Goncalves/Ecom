import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({ onPress, text, type = "primary", bgColor, fgColor}) => {
    return (
        <Pressable 
        onPress={onPress} 
        style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
        ]}>
            <Text 
            style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? {color : fgColor} : {},
                ]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        width: '95%',

        height: 50,

        alignItems: "center",
        justifyContent: "center",
    },
    container_primary: {
        backgroundColor: '#62D9AD',
    },
    text: {
        color: '#F2F2F2'
    },
})

export default CustomButton
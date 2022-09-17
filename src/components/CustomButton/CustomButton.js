import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({ onPress, text, type = "primary"}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,

        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: "center",
    },
    container_primary: {
        backgroundColor: '#62D9AD',

    },
    container_tertiary: {
    },
    text: {
        color: '#F2F2F2'
    },
    text_tertiary: {
        color: 'gray'
    },
})

export default CustomButton
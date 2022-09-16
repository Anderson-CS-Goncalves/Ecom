import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomImput = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="placeholder" style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        width: '90%',
        paddingVertical: 15,

        alignItems: 'baseline',

        borderRadius: 15,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {

    },
})

export default CustomImput
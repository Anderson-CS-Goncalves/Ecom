import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

const ClickableText = ({onPress, onSecondPress, text, type, ClickableText, secondText, SecondClickableText}) => {
    return (
        <View style={[styles.container, styles[`container_${type}`]]}>
            <Text style = {styles.text}>{text}<Text onPress={onPress} style = {styles.text_clickable}>{ClickableText}</Text>
            {secondText}<Text onPress={onSecondPress} style = {styles.text_clickable}>{SecondClickableText}</Text></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    container_left: {
        width: '94%',
        alignItems: "flex-start",
        marginBottom: 20
    },
    container_right: {
        width: '95%',
        marginVertical: 20,
        alignItems: "flex-end"
    },
    container_center: {
        width: '100%',
        alignItems: "center"
    },
    text: {
        color: "gray",
        flexShrink: 1
    },
    text_clickable: {
        color: "#62D9AD"
    }
});


export default ClickableText
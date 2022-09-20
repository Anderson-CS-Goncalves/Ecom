import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

const ClickableText = ({onPress, text, type, ClickableText}) =>
    <View style={[styles.container, styles[`container_${type}`]]}>
        <Text style = {styles.text}>{text}<Text onPress={onPress} style = {styles.text_clickable}>{ClickableText}</Text></Text>
    </View>

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 20,
    },
    container_right: {
        width: '95%',
        marginVertical: 20,
        alignItems: "flex-end"
    },
    container_center: {
        width: '100%',
        marginVertical: 20,
        alignItems: "center"
    },
    text: {
        color: "gray",
    },
    text_clickable: {
        color: "#62D9AD"
    }
});


export default ClickableText
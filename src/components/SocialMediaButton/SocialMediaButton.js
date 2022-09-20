import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";


const SocialMediaButton = ({onPress, source, type}) =>
    <TouchableOpacity 
    onPress={onPress}
    style={styles[`container_${type}`]}>
        <Image source={source}  style={styles.img}/>
    </TouchableOpacity>;

const styles = StyleSheet.create({
    img: {
        width: 28,
        height: 28,
    },
    container_facebook: {
        width: '45%',
        padding: 10,
        borderRadius: 12,
        marginHorizontal: 15,
        backgroundColor: "#4267B2",
        alignItems: 'center',
        justifyContent: "center"
    },
    container_google: {
        width: '45%',
        padding: 10,
        marginHorizontal: 15,
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: "center"
    },
});


export default SocialMediaButton
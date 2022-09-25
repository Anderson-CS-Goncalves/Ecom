import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";


const CustomImageInfo = ({source, mainText, text}) => {
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image}/>
            <Text style={styles.mainText}>{mainText}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginBottom: 50,
        width: "100%",
        height: '30%',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 24
    },
    text: {
        fontSize: 18,
        opacity: 0.3
    },
    image: {
        resizeMode: "stretch",
        marginBottom: 20,
        height: 100,
        width: 90,
    }

});


export default CustomImageInfo
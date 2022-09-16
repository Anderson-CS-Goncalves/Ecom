import React from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "../../../assets/images/LogoEcom.png";
import CustomImput from "../../components/CustomImput";

const SignInScreen = () => {
    const {height} = useWindowDimensions();

    return (
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"
            />

            <CustomImput />
            <CustomImput />
        </View>
    );
};

const styles = StyleSheet.create({
    root : {
        alignItems: "center",
    },
    logo : {
        marginTop: '30%',
        marginBottom: '5%',
        maxWidth: 500,
        width: '70%',
        maxHeight: 300,
    }
})

export default SignInScreen;
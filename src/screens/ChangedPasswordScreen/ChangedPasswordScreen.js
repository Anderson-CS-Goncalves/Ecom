import React, {createRef, useState, useEffect} from "react";
import { View, Text, Image, StyleSheet,} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import BackPreviousScreen from "../../components/BackPreviousScreen";
import CustomImageInfo from "../../components/CustomImageInfo";
import Toast from "../../components/Toast";

import Reload from '../../../assets/images/reload.png';


const ChangePasswordScreen = () => {

    const navigation = useNavigation();


    const onSignUpPressed = () => {
        console.warn('cadastrar')
        //verificação
        navigation.navigate('SignInScreen')
    }

    return (
        <View style={styles.root}>
 
            <Toast />

            <CustomImageInfo mainText='SUA SENHA FOI ATUALIZADA' text='Sua senha foi atualizada com sucesso!' source={Reload}/>

            <CustomButton 
            onPress={onSignUpPressed}
            text='Login'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root : {
        alignItems: "center",
        padding: '5%',
    },
})

export default ChangePasswordScreen;
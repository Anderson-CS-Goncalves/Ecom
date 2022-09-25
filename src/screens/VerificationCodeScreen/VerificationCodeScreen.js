import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../../components/CustomButton";
import BackPreviousScreen from "../../components/BackPreviousScreen";
import CustomImageInfo from "../../components/CustomImageInfo";
import VerificationInput from "../../components/VerificationInput";
import Toast from "../../components/Toast";

import Email from '../../../assets/images/email.png'

import { showToast } from '../../store/modules/Toast/actions'
import { useDispatch } from "react-redux";

const VerificationCodeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onConfirmCodePressed = () => {
        console.warn('Código confirmado')
        //verificação
        navigation.navigate('ChangePasswordScreen')
    }

    return (
        <View style={styles.root}>
 
            <Toast />

            <BackPreviousScreen text="Código de verificação"/>

            <CustomImageInfo mainText='INFORME O CÓDIGO' text='Que foi enviado para seu email' source={Email}/>

            <VerificationInput />

            <CustomButton 
            onPress={onConfirmCodePressed}
            text='Enviar'
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

export default VerificationCodeScreen;
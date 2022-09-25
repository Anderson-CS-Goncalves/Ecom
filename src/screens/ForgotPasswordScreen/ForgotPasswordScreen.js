import React, {createRef, useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import BackPreviousScreen from "../../components/BackPreviousScreen";
import CustomImageInfo from "../../components/CustomImageInfo";
import Toast from "../../components/Toast";

import Lock from '../../../assets/images/lock.png'

import { showToast } from '../../store/modules/Toast/actions'
import { useDispatch } from "react-redux";


const ForgotPasswordScreen = () => {

    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('');

    const emailInput = createRef();

    useEffect(() => emailInput.current.resetError(), [email])

    function signUp(){
        if(email == ''){
            dispatch(showToast('Email inválido', 'error', 'mail'));
            emailInput.current.focusOnError();
            return;
        }
    }

    const onSignUpPressed = () => {
        console.warn('cadastrar')
        signUp()
    }

    return (
        <View style={styles.root}>
 
            <Toast />

            <BackPreviousScreen text="Esqueci minha senha"/>

            <CustomImageInfo mainText='ESQUECEU SUA SENHA?' text='Informe seu email' source={Lock}/>

            <CustomInput 
            ref={emailInput}
            value={email}
            onChangeText={setEmail}
            icon={"mail"}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="done"
            />

            <CustomButton 
            onPress={onSignUpPressed}
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

export default ForgotPasswordScreen;
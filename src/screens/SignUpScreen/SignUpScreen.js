import React, {createRef, useState, useEffect} from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import ClickableText from "../../components/ClickableText";
import BackPreviousScreen from "../../components/BackPreviousScreen";
import Toast from "../../components/Toast";

import { showToast } from '../../store/modules/Toast/actions'
import { useDispatch } from "react-redux";

const SignUpScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const usernameInput = createRef();
    const emailInput = createRef();
    const phoneInput = createRef();
    const birthdayInput = createRef();
    const passwordInput = createRef();
    const confirmPasswordInput = createRef();

    useEffect(() => usernameInput.current.resetError(), [username])
    useEffect(() => emailInput.current.resetError(), [email])
    useEffect(() => phoneInput.current.resetError(), [phoneNumber])
    useEffect(() => birthdayInput.current.resetError(), [birthday])
    useEffect(() => passwordInput.current.resetError(), [password])
    useEffect(() => confirmPasswordInput.current.resetError(), [confirmPassword])

    function signUp(){
        if(username == ''){
            dispatch(showToast('Nome de usuário inválido', 'error', 'person-sharp'));
            usernameInput.current.focusOnError();
            return;
        }
        if(email == ''){
            dispatch(showToast('Email inválido', 'error', 'mail'));
            emailInput.current.focusOnError();
            return;
        }
        if(phoneNumber == ''){
            dispatch(showToast('Número de telefone inválido', 'error', 'call'));
            phoneInput.current.focusOnError();
            return;
        }
        if(birthday == ''){
            dispatch(showToast('Data de nascimento inválida', 'error', 'calendar'));
            birthdayInput.current.focusOnError();
            return;
        }
        if(password == ''){
            dispatch(showToast('Senha inválida', 'error', 'lock-closed'));
            passwordInput.current.focusOnError();
            return;
        }
        if(confirmPassword == ''){
            dispatch(showToast('Senha inválida', 'error', 'lock-closed'));
            confirmPasswordInput.current.focusOnError();
            return;
        }
    }

const onTermsUsePressed = () => {
    console.warn('termos de uso')
}
const onPrivacyPressed = () => {
    console.warn('politica de privacidade')
}
const onSignUpPressed = () => {
    console.warn('cadastrar')
    signUp()
}
const onAlreadyAccountPressed = () => {
    console.warn('ja tenho conta')
    navigation.navigate('SignInScreen')
}

    return (
        <View style={styles.root}>
 
            <Toast />

            <BackPreviousScreen text="Criar nova conta"/>

            <Text style={styles.cadastro}>Cadastrar</Text>

            <CustomInput
            ref={usernameInput}
            value={username}
            onChangeText={setUsername}
            icon={"person-sharp"} 
            placeholder="Nome de Usuário"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => emailInput.current.focusOn()}
            blurOnSubmit={false}
            />
            <CustomInput 
            ref={emailInput}
            value={email}
            onChangeText={setEmail}
            icon={"mail"}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => phoneInput.current.focusOn()}
            blurOnSubmit={false}
            />
            <CustomInput
            ref={phoneInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            icon={"call"} 
            placeholder="Número de telefone"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            returnKeyType="next"
            onSubmitEditing={() => birthdayInput.current.focusOn()}
            blurOnSubmit={false}
            />
            <CustomInput
            ref={birthdayInput}
            value={birthday}
            onChangeText={setBirthday}
            icon={"calendar"} 
            placeholder="Data de nascimento"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            returnKeyType="next"
            onSubmitEditing={() => passwordInput.current.focusOn()}
            blurOnSubmit={false}
            />
            <CustomInput
            ref={passwordInput}
            value={password}
            onChangeText={setPassword}
            icon={"lock-closed"} 
            placeholder="Senha"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordInput.current.focusOn()}
            blurOnSubmit={false}
            />
            <CustomInput
            ref={confirmPasswordInput}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            icon={"lock-closed"} 
            placeholder="Confirmar senha"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            keyboardType="default"
            returnKeyType="done"
            />

            <ClickableText 
            text="Ao se cadastrar você concorda com nossos "
            ClickableText="termos de uso "
            onPress={onTermsUsePressed}
            secondText="e "
            SecondClickableText="políticas de privacidade"
            onSecondPress={onPrivacyPressed}
            type="left"                
            />

            <CustomButton 
            onPress={onSignUpPressed}
            text='Cadastrar'
            />

            <View style={styles.space}></View>

            <ClickableText 
            onPress={onAlreadyAccountPressed}
            text="Já possui cadastro? " 
            ClickableText="Acessar conta"
            type="center"
            />

        </View>
    );
};

const styles = StyleSheet.create({
    root : {
        alignItems: "center",
        padding: '5%',
    },
    cadastro: {
        fontSize: 32,
        color: '#62D9AD',
        marginBottom: 32
    },
    space: {
        marginTop: 60
    }
})

export default SignUpScreen;
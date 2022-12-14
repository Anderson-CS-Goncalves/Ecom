import React, {createRef, useState, useEffect} from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import BackPreviousScreen from "../../components/BackPreviousScreen";
import CustomImageInfo from "../../components/CustomImageInfo";
import Toast from "../../components/Toast";

import Reload from '../../../assets/images/reload.png'

import { showToast } from '../../store/modules/Toast/actions'
import { useDispatch } from "react-redux";

const ChangePasswordScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const passwordInput = createRef();
    const confirmPasswordInput = createRef();

    useEffect(() => passwordInput.current.resetError(), [password])
    useEffect(() => confirmPasswordInput.current.resetError(), [confirmPassword])

    function changePassword(){
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

    const onChangePasswordPressed = () => {
        console.warn('senha mudada')
        changePassword()
        //verificação
        navigation.navigate('ChangedPasswordScreen')
    }

    return (
        <View style={styles.root}>
 
            <Toast />

            <BackPreviousScreen text="Redefinir senha"/>

            <CustomImageInfo mainText='CRIAR NOVA SENHA' text='A nova senha deve ser diferente da senha anterior' source={Reload}/>

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

            <CustomButton 
            onPress={onChangePasswordPressed}
            text='Atualizar'
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
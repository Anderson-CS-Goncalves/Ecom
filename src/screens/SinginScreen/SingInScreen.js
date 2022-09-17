import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "../../../assets/images/LogoEcom.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

const onSignInPressed = () => {
    console.warn('oioi');
}
const onForgotPasswordPressed = () => {
    console.warn('senha')
}

    return (
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"
            />

            <CustomInput 
            placeholder="Nome de usuário ou Email" 
            value={username} 
            setValue={setUsername}
            />
            <CustomInput 
            placeholder="Senha" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            />

            <CustomButton 
            onPress={onSignInPressed}
            text='Login'
            />
            <CustomButton 
            onPress={onForgotPasswordPressed}
            text='Esqueci minha senha'
            type="tertiary"
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    root : {
        alignItems: "center",
        padding: '5%',
    },
    logo : {
        marginTop: '30%',
        marginBottom: '5%',
        maxWidth: 500,
        width: '100%',
        maxHeight: 300,
    }
})

export default SignInScreen;
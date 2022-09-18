import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "../../../assets/images/LogoEcom.png";
import FacebookLogo from "../../../assets/images/facebook.png";
import GoogleLogo from "../../../assets/images/google.png"
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialMediaButton from "../../components/SocialMediaButton";

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

const onSignInFacebook = () => {
    console.warn('facebook')
}

const onSignInGoogle = () => {
    console.warn('google')
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

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#D9D9D9'}} />
            <View>
                <Text style={{width: 50, textAlign: 'center', color: '#D9D9D9'}}>OU</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#D9D9D9'}} />
            </View>
            
            <View style={styles.social_media_container}>
                <SocialMediaButton 
                onPress={onSignInFacebook}
                source={FacebookLogo}
                type="facebook"
                />
                <SocialMediaButton 
                onPress={onSignInGoogle}
                source={GoogleLogo}
                type="google"
                />
            </View>

            <CustomButton
            onPress={onForgotPasswordPressed}
            text='Não é cadastrado? Criar conta'
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
    },
    social_media_container: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "center"
    }
})

export default SignInScreen;
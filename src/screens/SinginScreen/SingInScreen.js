import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";

import { Ionicons } from "@expo/vector-icons"
import Logo from "../../../assets/images/ecom-logo-DF4A3FF5B3-seeklogo.com.png";
import FacebookLogo from "../../../assets/images/facebook.png";
import GoogleLogo from "../../../assets/images/google.png"

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialMediaButton from "../../components/SocialMediaButton";
import ClickableText from "../../components/ClickableText";


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

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

const onSignUpPressed = () => {
    console.warn('cadastrar')
}

    return (
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"
            />

            <CustomInput 
            value={username}
            onChangeText={setUsername}
            icon={"person-sharp"}
            placeholder="Nome de usuário ou Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            />
            <CustomInput
            icon={"lock-closed"} 
            placeholder="Senha"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            keyboardType="default"
            />

            <CustomButton 
            onPress={onSignInPressed}
            text='Login'
            />
          
            <ClickableText 
            onPress={onForgotPasswordPressed}
            text="Esqueci minha "
            ClickableText="senha"
            type="right"
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

            <ClickableText 
            onPress={onSignUpPressed}
            text="Não é cadastrado? " 
            ClickableText="Criar conta"
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
import React, {createRef, useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as WebBrowser from 'expo-web-browser';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Logo from "../../../assets/images/ecom-logo-DF4A3FF5B3-seeklogo.com.png";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import ClickableText from "../../components/ClickableText";
import Toast from "../../components/Toast";
import FacebookSignIn from "./FacebookSignIn";
import GoogleSignIn from "./GoogleSignIn";


import { showToast } from '../../store/modules/Toast/actions'
import { useDispatch } from "react-redux";


initializeApp({
    apiKey: "AIzaSyD9qHO-j4RWGSTg249gciTIm5i48MRdIMQ",
  
    authDomain: "bd-tcc-3ds.firebaseapp.com",
  
    databaseURL: "https://bd-tcc-3ds-default-rtdb.firebaseio.com",
  
    projectId: "bd-tcc-3ds",
  
    storageBucket: "bd-tcc-3ds.appspot.com",
  
    messagingSenderId: "44715367004",
  
    appId: "1:44715367004:web:d7aab22261d34c5738e499",
  
    measurementId: "G-KV2ZDWBD3H"
  });

WebBrowser.maybeCompleteAuthSession();

const SignInScreen = () => {
    const profile = {
        userEmail : String,
        userName : String,
        userPhoto : String,
      }

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {height} = useWindowDimensions();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailInput = createRef();
    const passwordInput = createRef();

    useEffect(() => emailInput.current.resetError(), [email])
    useEffect(() => passwordInput.current.resetError(), [password])

    function login(){
        if(email == ''){
            dispatch(showToast('Email inválido', 'error', 'person-sharp'));
            emailInput.current.focusOnError();
            return;
        }
        if(password == ''){
            dispatch(showToast('Senha inválida', 'error', 'lock-closed'));
            passwordInput.current.focusOnError();
            return;
        }
    }
    
    const auth = getAuth();
    const SignInWithEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const profile = {
                        userEmail : user.email,
                        userName : user.displayName,
                        userPhoto : user.photoURL,
                      }
                    navigation.navigate('Router', {profile})
                }
                else {
                  console.warn('erro')
                  navigation.goBack()
                }
              })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

const onSignInPressed = () => {;
    SignInWithEmail()
}
const onForgotPasswordPressed = () => {
    console.warn('senha')
    navigation.navigate('ForgotPasswordScreen')
}
const onSignUpPressed = () => {
    console.warn('cadastro')
    navigation.navigate('SignUpScreen')
}

    return (
        <View style={styles.root}>
 
            <Toast />

            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"
            />

            <CustomInput 
            ref={emailInput}
            value={email}
            onChangeText={setEmail}
            icon={"person-sharp"}
            placeholder="Nome de usuário ou Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
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
            returnKeyType="done"
            />

            <CustomButton 
            onPress={SignInWithEmail}
            text='Login'
            />
          
            <ClickableText 
            onPress={onForgotPasswordPressed}
            text="Esqueci minha "
            ClickableText="senha"
            type="right"
            />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, marginLeft:10, height: 1, backgroundColor: '#D9D9D9'}} />
            <View>
                <Text style={{width: 50, textAlign: 'center', color: '#D9D9D9'}}>OU</Text>
            </View>
            <View style={{flex: 1, marginRight:10, height: 1, backgroundColor: '#D9D9D9'}} />
            </View>
            
            <View style={styles.social_media_container}>
                <FacebookSignIn />
                <GoogleSignIn />
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
        marginBottom: 40,
        flexDirection: "row",
        justifyContent: "center"
    }
})

export default SignInScreen;
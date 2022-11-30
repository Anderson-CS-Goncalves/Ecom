import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from "../screens/SinginScreen/SingInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen/ChangePasswordScreen";
import VerificationCodeScreen from '../screens/VerificationCodeScreen/VerificationCodeScreen';
import ChangedPasswordScreen from '../screens/ChangedPasswordScreen/ChangedPasswordScreen';
import Router from '../components/Router';
import About from '../screens/Configs/About';
import EditProfile from '../screens/Configs/EditProfile';
import Help from '../screens/Configs/Help';
import Language from '../screens/Configs/Language';
import Notifications from '../screens/Configs/Notifications';
import Security from '../screens/Configs/Security';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SignInScreen' component={SignInScreen}  />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen}  />
        <Stack.Screen name='ChangePasswordScreen' component={ChangePasswordScreen}  />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen}  />
        <Stack.Screen name='VerificationCodeScreen' component={VerificationCodeScreen} />
        <Stack.Screen name='ChangedPasswordScreen' component={ChangedPasswordScreen} />
        <Stack.Screen name='Router' component={Router}  />
        <Stack.Screen name='About' component={About}  />
        <Stack.Screen name='Help' component={Help}  />
        <Stack.Screen name='Language' component={Language}  />
        <Stack.Screen name='Notifications' component={Notifications}  />
        <Stack.Screen name='Security' component={Security}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
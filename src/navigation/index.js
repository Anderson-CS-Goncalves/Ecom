import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from "../screens/SinginScreen/SingInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen/ChangePasswordScreen";
import VerificationCodeScreen from '../screens/VerificationCodeScreen/VerificationCodeScreen';
import ChangedPasswordScreen from '../screens/ChangedPasswordScreen/ChangedPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import Router from '../components/Router';
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
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

import store from "./store";

import SignInScreen from "./screens/SinginScreen/SingInScreen";
import Toast from "./components/Toast";

const Main = () => {
    return (
        <Provider store={store}>
            <Toast />
            <SignInScreen />
        </Provider>
    )
}

export default Main;
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import SignInScreen from "./src/screens/SinginScreen/SingInScreen";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import ChangePasswordScreen from "./src/screens/ChangePasswordScreen/ChangePasswordScreen";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";

import store from "./src/store";

const App = () => {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.root}>
          <Navigation />
       </SafeAreaView>
      </Provider>

    );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  }
});

export default App;
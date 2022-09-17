import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import SignInScreen from "./src/screens/SinginScreen/SingInScreen";

const App = () => {
    return (
        <SafeAreaView style={styles.root}>
            <SignInScreen />
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  }
});

export default App;
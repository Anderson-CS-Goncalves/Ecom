import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import DataMarkers from "./src/components/CustomMarkers/DataMarkers";

import 'expo-dev-client'
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
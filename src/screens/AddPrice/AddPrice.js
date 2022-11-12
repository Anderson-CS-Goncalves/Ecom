import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const AddPrice = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#e0e0e0' style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AddPrice
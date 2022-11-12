import React from 'react';

import { StyleSheet, View, ScrollView } from 'react-native';

import Stations from '../Stations';

const Saved = () => {
  return (
    <View style={styles.container}>

    <Stations/>

  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
  });

export default Saved
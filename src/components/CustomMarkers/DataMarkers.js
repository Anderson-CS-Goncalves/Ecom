import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { db } from '../../../firebase-config.js'
import React, { useState } from 'react';
import { getDatabase, ref, child, get} from 'firebase/database';

const DataMarkers = () => {
  const dbRef = ref(getDatabase());
  const [postos, setPostos] = useState([]);

  get(child(dbRef, `postos`)).then((snapshot) => {
    if (snapshot.exists()) {
     // var infoPostos = snapshot.val()
      setPostos(snapshot.val())
    } else {
      console.log("No data")
    }
  }).catch((error) => {
    console.error(error);
  })

  //console.log('teste')

  return (
    <View>
      <Text>teste</Text>
    </View>
  );
}

export default DataMarkers
import { StyleSheet, Text, View, Dimensions,Image  } from 'react-native';
import { db } from '../../../firebase-config.js';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get, set} from 'firebase/database';
import MapView, { Callout, Marker, MarkerAnimated } from 'react-native-maps';
import ipiranga from '../../../assets/images/shell.png'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const PostosInfo = () => {

  const dbRef = ref(getDatabase());

  const [postos, setPostos] = useState([]);
  const [listar, setListar] = useState([]);
  let listaposto = []

  useEffect(()=>{
    get(child(dbRef, `postos`)).then((snapshot) => {

      if (snapshot.exists()) {
        const location = {
            id: String,
            latitude: Number,
            longitude: Number
        }
        snapshot.forEach((posto)=>{
            posto.forEach((item) => {
                let location = {
                    id: item.child('Tel'),
                    latitude: item.child('Lat'),
                    longitude: item.child('Long')
                }
                listaposto.push(location)
            })
        });
       setListar(listaposto);
      } else {
        console.log("No data")
      }
    }).catch((error) => {
      console.error(error);
    })
  },[listar])
}

export default PostosInfo;
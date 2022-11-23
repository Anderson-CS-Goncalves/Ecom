import { StyleSheet, Text, View, Dimensions,Image, TurboModuleRegistry  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get, set, onValue} from 'firebase/database';
import MapView, { Callout, Marker, MarkerAnimated } from 'react-native-maps';
const Map = () => {
  const dbRef = ref(getDatabase());
  const [postos, setPostos] = useState([]);
  const [listar, setListar] = useState([]);
  let listaposto = [];
  let listalocais = []

  useEffect(()=>{
    get(child(dbRef, `postos`)).then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((posto)=>{
          let location = {
            id: posto.child('Tel'),
            latitude: posto.child('Lat'),
            longitude: posto.child('Long'),
            bandeira: posto.child('Bandeira')
          }
          listaposto.push(location)
        });
        listaposto.forEach((item) => {
          var itemString = JSON.stringify(item.id)
          var latitudeString = JSON.stringify(item.latitude)
          var longitudeString = JSON.stringify(item.longitude)
          var latitudeNumber = Number(latitudeString)
          var longitudeNumber = Number(longitudeString)
          let localizacao = {
            id: itemString,
            latitude: latitudeNumber,
            longitude: longitudeNumber,
          }
          listalocais.push(localizacao)
          //console.log(listalocais)
        });
        setListar(listalocais)
        //console.log(listalocais)
      } else {
        console.log("No data")
      }
    }).catch((error) => {
      console.error(error);
    })
  },[])
  
  return (
      <MapView 
      style={styles.map}
      region={{
        latitude: -22.934872952347487,
        longitude: -45.46696829324074,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        {listar.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
          />
        ))}
      </MapView>        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  marker: {
    height: 24,
    width: 24
  }
});

export default Map

/*{listar.map((item, index) =>{
  return (
    <Marker 
    key={index}
      coordinate={{
        latitude: item['latitude'],
        longitude: item['longitude']
      }}
    />
  )
})}*/
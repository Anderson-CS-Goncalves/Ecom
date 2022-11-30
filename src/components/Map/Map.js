import { StyleSheet, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get} from 'firebase/database';
import MapView, { Marker} from 'react-native-maps';
import * as Location from 'expo-location';
const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const dbRef = ref(getDatabase());
  const [listar, setListar] = useState([]);
  let listalocais = []
  const imagesPath = {
    1: require('../../../assets/images/markers/Shell.png'),
    2: require('../../../assets/images/markers/7estrela.png'),
    3: require('../../../assets/images/markers/br.png'),
    4: require('../../../assets/images/markers/Ipiranga.png')
  };

  useEffect(()=>{
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let userLocation = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
    get(child(dbRef, `postos`)).then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((posto)=>{
          let location = {
            nome: posto.key,
            id: JSON.stringify(posto.child('Tel')),
            latitude: Number(JSON.stringify(posto.child('Lat'))),
            longitude: Number(JSON.stringify(posto.child('Long'))),
            bandeira: JSON.stringify(posto.child('Bandeiraa')),
          }
          listalocais.push(location)
        });
        setListar(listalocais)
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
      initialRegion={userLocation}
      showsUserLocation={true}
      zoomEnabled={true}
      >
        {listar.map((marker, index) => {
          return(
            <Marker
            key={index}
            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
            title={marker.nome}
            icon={imagesPath[marker.bandeira]}
            />
          )
        })}
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
});

export default Map;
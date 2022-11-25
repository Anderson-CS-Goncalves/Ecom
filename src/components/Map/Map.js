import { StyleSheet, Text, View, Dimensions,Image, TurboModuleRegistry  } from 'react-native';
import React, { useState, useEffect, Ref } from 'react';
import { getDatabase, ref, child, get, set, onValue} from 'firebase/database';
import MapView, { Callout, Marker, MarkerAnimated } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const dbRef = ref(getDatabase());
  const [postos, setPostos] = useState([]);
  const [listar, setListar] = useState([]);
  let listaposto = [];
  let listalocais = []


  useEffect(()=>{
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();

    get(child(dbRef, `postos`)).then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((posto)=>{
          let location = {
            nome: posto.key,
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
          var bandeiraString = JSON.stringify(item.bandeira)
          let localizacao = {
            nome: item.nome,
            id: itemString,
            latitude: latitudeNumber,
            longitude: longitudeNumber,
            bandeira: bandeiraString
          }
          listalocais.push(localizacao)
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
      initialRegion={location}
      showsUserLocation={true}
      >

        {listar.map((marker, index) => {
          if(marker.bandeira === '"Shell"'){
            return(
              <Marker
                key={index}
                coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                title={marker.nome}
                image={require('../../../assets/images/markers/Shell.png')}
                style={styles.marker}
                />
             )
          }
          else if(marker.bandeira === '"Ipiranga"'){
            return(
              <Marker
                key={index}
                coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                title={marker.nome}
                image={require('../../../assets/images/markers/Ipiranga.png')}
                style={styles.marker}
                />
             )
          }
          else if(marker.bandeira === '"BR"'){
            return(
              <Marker
                key={index}
                coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                title={marker.nome}
                image={require('../../../assets/images/markers/br.png')}
                style={styles.marker}
                />
             )
          }
          else if(marker.bandeira === '"Sete Estrelas"'){
            return(
              <Marker
                key={index}
                coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                title={marker.nome}
                image={require('../../../assets/images/markers/7estrela.png')}
                style={styles.marker}
                />
             )
          }
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
  marker: {
    height: 24,
    width: 24
  }
});

export default Map
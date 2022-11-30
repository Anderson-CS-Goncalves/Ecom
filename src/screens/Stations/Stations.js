import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import { getDatabase, ref, child, get} from 'firebase/database';

import '../../components/Translate/i18n'
import { useTranslation } from 'react-i18next'

import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards'
import getDistance from 'geolib/es/getPreciseDistance';
import * as Location from 'expo-location';

const Stations = () => {
    const {t, i18n} = useTranslation();
    const dbRef = ref(getDatabase());
    const imagesPath = {
      1: require('../../../assets/images/stations/Shell.png'),
      2: require('../../../assets/images/stations/Sete-Estrelas.png'),
      3: require('../../../assets/images/stations/BR.png'),
      4: require('../../../assets/images/stations/Ipiranga.png')
    };
    const [loading, setLoading] = useState(false);
    let listaCards = [];
    const [errorMsg, setErrorMsg] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(listar);
    const [listar, setListar] = useState([]);
    const [opa, setOpa] = useState(false)

  useEffect(()=>{
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('permission was denied')
        return;
      }
      let userLocation = await Location.getCurrentPositionAsync({});
      const usuarioLocation = {
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      get(child(dbRef, `postos`)).then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((posto)=>{
            var distance = getDistance(
              {latitude: usuarioLocation.latitude, longitude: usuarioLocation.longitude},
              {latitude: Number(JSON.stringify(posto.child('Lat'))), longitude: Number(JSON.stringify(posto.child('Long')))}
            )
            var distanciaKm = distance/1000
            var distanciaKmDecimal = Math.round(distanciaKm * 10) /10
            let cardInfo = {
              nome: posto.key,
              id: posto.child('Tel'),
              latitude: Number(JSON.stringify(posto.child('Lat'))),
              longitude: Number(JSON.stringify(posto.child('Long'))),
              endereco: JSON.stringify(posto.child('Endereco')),
              bandeira: JSON.stringify(posto.child('Bandeiraa')),
              avaliacao: Number(JSON.stringify(posto.child('NotaGeral'))),
              etanol: (Math.round(Number(JSON.stringify(posto.child('precos').child('Etanol'))) * 100) / 100).toFixed(2),
              gasolina: (Math.round(Number(JSON.stringify(posto.child('precos').child('Gasolina'))) * 100) / 100).toFixed(2),
              distancia: distanciaKmDecimal
            }
            listaCards.push(cardInfo)
          });
          setListar(listaCards)
          setLoading(true)
        } else {
          console.log("No data")
        }
      }).catch((error) => {
        console.error(error);
      })
    })();
  },[]) 

    return (
      <View>
      <SearchBar onChangeText={(t) => {setSearchText(t)}}/>  
      <ScrollView>
        <View style={styles.container}>
        <StatusBar backgroundColor='#e0e0e0' style="auto" />

        {loading ? listar.map((marker, index) => {
            return( 
            <Cards 
              key={index}
              preco={marker.gasolina}
              dias={12}
              nomePosto={marker.nome}
              endereco={marker.endereco}
              distancia={marker.distancia}
              avaliacao={marker.avaliacao}
              icone={imagesPath[marker.bandeira]}
            /> )
        }): <ActivityIndicator size="large" style={styles.loading} color='#62D9AD'/> }

            <View style={{height:200}}></View>
        </View>
        </ScrollView>    
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
    },
    loading: {
      marginTop: 300
    }
  });

export default Stations;
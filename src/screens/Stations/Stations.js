import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, Image, ActivityIndicator } from 'react-native';
import { getDatabase, ref, child, get, set, onValue} from 'firebase/database';
import MapView, { Callout, Marker, MarkerAnimated } from 'react-native-maps';

import '../../components/Translate/i18n'
import { useTranslation } from 'react-i18next'

import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards'
import getDistance from 'geolib/es/getPreciseDistance';
import * as Location from 'expo-location';

const Stations = () => {
    const {t, i18n} = useTranslation();
    const dbRef = ref(getDatabase());
    const [postos, setPostos] = useState([]);
    const [listar, setListar] = useState([]);
    const [loading, setLoading] = useState(false);
    let listacards = [];
    let listaCards = [];
    const [userLocation, setUserLocation] = useState({});
    const [errorMsg, setErrorMsg] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    if(searchText === '') {
      setFilteredData(listar)
    } else {
       setFilteredData(
        listar.filter((item) => {
          if(item.nome.indexOf(searchText) > -1) {
            return true;
          } else {
            return false;
          }
        })
       );
    }
  }, [searchText]);

  console.log(filteredData)

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
            let cardInfo = {
              nome: posto.key,
              id: posto.child('Tel'),
              latitude: posto.child('Lat'),
              longitude: posto.child('Long'),
              endereco: posto.child('Endereco'),
              bandeira: posto.child('Bandeira'),
              avaliacao: posto.child('NotaGeral'),
              etanol: posto.child('precos').child('Etanol'),
              gasolina: posto.child('precos').child('Gasolina')
            }
            listacards.push(cardInfo)
          });
          listacards.forEach((item) => {
            var enderecoString = JSON.stringify(item.endereco)
            var latitudeString = JSON.stringify(item.latitude)
            var longitudeString = JSON.stringify(item.longitude)
            var latitudeNumber = Number(latitudeString)
            var longitudeNumber = Number(longitudeString)
            var bandeiraString = JSON.stringify(item.bandeira)
            var etanolString = JSON.stringify(item.etanol)
            var etanolNumber = Number(etanolString)
            var etanolRounded = (Math.round(etanolNumber * 100) / 100).toFixed(2); 
            var gasolinaString = JSON.stringify(item.gasolina)
            var gasolinaNumber = Number(gasolinaString)
            var gasolinaRounded = (Math.round(gasolinaNumber * 100) / 100).toFixed(2);          
            var avaliacaoString = JSON.stringify(item.avaliacao)
            var avaliacaoNumber = Number(avaliacaoString)
            var distance = getDistance(
              {latitude: usuarioLocation.latitude, longitude: usuarioLocation.longitude},
              {latitude: latitudeNumber, longitude: longitudeNumber}
            )
            var distanciaKm = distance/1000
            var distanciaKmDecimal = Math.round(distanciaKm * 10) /10
            let cardsInfo = {
              nome: item.nome,
              endereco: enderecoString,
              latitude: latitudeNumber,
              longitude: longitudeNumber,
              bandeira: bandeiraString,
              avaliacao: avaliacaoNumber,
              etanol: etanolNumber,
              gasolina: gasolinaRounded,
              distancia: distanciaKmDecimal
            }
            listaCards.push(cardsInfo)
          });
          setListar(listaCards)
          setLoading(true)
          //console.log(listar)
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
      <SearchBar onChangeText={(t) => setSearchText(t)}/>  
      <ScrollView>
        <View style={styles.container}>
        <StatusBar backgroundColor='#e0e0e0' style="auto" />

        {loading ? filteredData.map((marker, index) => {
          if(marker.bandeira === '"Shell"'){
            return( <Cards 
            key={index}
            preco={marker.gasolina}
            dias={12}
            nomePosto={marker.nome}
            endereco={marker.endereco}
            distancia={marker.distancia}
            avaliacao={marker.avaliacao}
            icone={require('../../../assets/images/stations/Shell.png')}
            /> )
          }
          else if(marker.bandeira === '"Sete Estrelas"'){
            return( <Cards 
              key={index}
              preco={marker.gasolina}
              dias={12}
              nomePosto={marker.nome}
              endereco={marker.endereco}
              distancia={marker.distancia}
              avaliacao={marker.avaliacao}
              icone={require('../../../assets/images/stations/Sete-Estrelas.png')}
              /> )
          }
          else if(marker.bandeira === '"BR"'){
            return( <Cards 
              key={index}
              preco={marker.gasolina}
              dias={12}
              nomePosto={marker.nome}
              endereco={marker.endereco}
              distancia={marker.distancia}
              avaliacao={marker.avaliacao}
              icone={require('../../../assets/images/stations/BR.png')}
              /> )
          }
          else if(marker.bandeira === '"Ipiranga"'){
            return( <Cards 
              key={index}
              preco={marker.gasolina}
              dias={12}
              nomePosto={marker.nome}
              endereco={marker.endereco}
              distancia={marker.distancia}
              avaliacao={marker.avaliacao}
              icone={require('../../../assets/images/stations/Ipiranga.png')}
              /> )
          }
          else {
            return( <Cards 
              key={index}
              preco={marker.gasolina}
              dias={12}
              nomePosto={marker.nome}
              endereco={marker.endereco}
              distancia={marker.distancia}
              avaliacao={marker.avaliacao}
              icone={require('../../../assets/images/stations/Shell.png')}
              /> )
          }
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
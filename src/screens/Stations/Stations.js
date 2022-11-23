import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { getDatabase, ref, child, get, set, onValue} from 'firebase/database';
import MapView, { Callout, Marker, MarkerAnimated } from 'react-native-maps';

import '../../components/Translate/i18n'
import { useTranslation } from 'react-i18next'

import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';

const Stations = () => {
    const {t, i18n} = useTranslation();
    const dbRef = ref(getDatabase());
    const [postos, setPostos] = useState([]);
    const [listar, setListar] = useState([]);
    let listacards = [];
    let listaCards = []

      useEffect(()=>{
    get(child(dbRef, `postos`)).then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((posto)=>{
          let cardInfo = {
            nome: posto.key,
            endereco: posto.child('Endereco'),
            bandeira: posto.child('Bandeira')
          }
          listacards.push(cardInfo)
        });
        listacards.forEach((item) => {
          var nomeString = item.nome 
          var enderecoString = JSON.stringify(item.endereco)
          var bandeiraString = JSON.stringify(item.bandeira)
          let cardsInfo = {
            nome: nomeString,
            endereco: enderecoString,
            bandeira: bandeiraString
          }
          listaCards.push(cardsInfo)
        });
        setListar(listaCards)
        //console.log(listar)
      } else {
        console.log("No data")
      }
    }).catch((error) => {
      console.error(error);
    })
  },[])

    return (
      <View>
      <SearchBar />  
      <ScrollView>
        <View style={styles.container}>
        <StatusBar backgroundColor='#e0e0e0' style="auto" />

        {listar.map((marker, index) => {
          if(marker.bandeira === '"Shell"'){
            return( <Cards 
            key={index}
            preco={5.44}
            dias={12}
            nomePosto={marker.nome}
            endereco={marker.endereco}
            distancia={1}
            icone={require('../../../assets/images/stations/Shell.png')}
            /> )
          }
          else if(marker.bandeira === '"Sete Estrelas"'){
            return( <Cards 
              key={index}
              preco={5.44}
              dias={12}
              nomePosto={marker.nome}
              endereco={marker.endereco}
              distancia={1}
              icone={require('../../../assets/images/stations/Sete-Estrelas.png')}
              /> )
          }
          else if(marker.bandeira === '"BR"'){
            return( <Cards 
              key={index}
              preco={5.44}
              dias={12}
              nomePosto={marker.nome}
              endereco={marker.endereco}
              distancia={1}
              icone={require('../../../assets/images/stations/BR.png')}
              /> )
          }
          else if(marker.bandeira === '"Ipiranga"'){
            return( <Cards 
              key={index}
              preco={5.44}
              dias={12}
              nomePosto={marker.nome}
              endereco={marker.endereco}
              distancia={1}
              icone={require('../../../assets/images/stations/Ipiranga.png')}
              /> )
          }
          else {
            return( <Cards 
              key={index}
              preco={5.44}
              dias={12}
              nomePosto={marker.nome}
              endereco={marker.endereco}
              distancia={1}
              icone={require('../../../assets/images/stations/Shell.png')}
              /> )
          }
        })}

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
  });

export default Stations;
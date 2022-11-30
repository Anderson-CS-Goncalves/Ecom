import { useState  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import '../../../components/Translate/i18n'

import { useTranslation } from 'react-i18next'
import BackPreviousScreen from '../../../components/BackPreviousScreen';

const Language = () => {
    const [currentLanguage, setCurrentLanguage] = useState('pt')

const {t, i18n} = useTranslation();

const changeLanguege = value => {
  i18n.changeLanguage(value)
  .then(() => {
    setCurrentLanguage(value)
  })
  .catch((err) => {
    console.log("deubosta");
  })

}

  return (
    <View style={styles.container}>
          <BackPreviousScreen text="Idioma"/>
          <Image style={styles.perfil} source={{uri: 'https://cdn-icons-png.flaticon.com/512/61/61027.png',}}></Image>
          <Text style={{fontSize: 22,   fontWeight: 'bold',}}> {t('IDIOMA')} </Text>



          <View style={styles.line} />



      <View>
          <Text style={styles.ds}>{t('Ecom App para Postos e Combustiveis')} </Text>
      </View> 



      <View style={styles.line} />



      <Text style={{fontSize: 17,   fontWeight: 'bold', color: '#BFBFBF',}}>{t('Selecione o seu Idioma:')} </Text>
      <View style={{flexDirection: 'row'}}>

            <TouchableOpacity style={{    
                borderRadius: 5,
                padding: 10,
                border: 30,
                borderWidth: 2,
                borderColor: currentLanguage === 'en' ? '#62D9AD' : 'transparent',
                margin: 10,}} onPress={() => changeLanguege('en')}>
                  <Text style={{fontSize:17}}>Inglês</Text>
              </TouchableOpacity>


              <TouchableOpacity style={{    
                borderRadius: 5,
                padding: 10,
                border: 30,
                borderWidth: 2,
                borderColor: currentLanguage === 'pt' ? '#62D9AD' : 'transparent',
                margin: 10,}} 
                onPress={() => changeLanguege('pt')}>
                  <Text style={{fontSize:17}}>Português</Text>
              </TouchableOpacity>

        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    height: '100%',
    alignItems: 'center',
  },
  icon:{
    margin: 15,
    width: 35,
    height: 35,
  },
  IconIdioma:{
    margin: '8%',
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red'
  },
  Text:{
    color: '#BFBFBF',
    border: 20,
    borderColor: '#62D9AD',
    fontSize: 17,
    marginRight: '30%',
    width: '35%',
  },
  perfil: {
    borderRadius: 360,
    width: 150,
    height: 150,
    border: 30,
    borderWidth: 2,
    borderColor: '#62D9AD',
  },
  line:{ 
    height: 3,
    margin: 20,
    backgroundColor: '#D9D9D9',
    width: '90%',
},
  ds:{
    color: '#BFBFBF',
    fontSize: 30,
    fontWeight: 'bold',
  },

});

export default Language;
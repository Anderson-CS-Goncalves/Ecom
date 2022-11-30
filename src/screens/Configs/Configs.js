import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, alert, TouchableOpacity, Image } from 'react-native';
import '../../components/Translate/i18n'
import { useTranslation } from 'react-i18next'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import BackPreviousScreen from '../../components/BackPreviousScreen'
import ConfigItem from '../../components/ConfigItem';

const Configs = () => {
    const {t, i18n} = useTranslation();
    const navigation = useNavigation();
    const userProfile = useContext(UserContext);

    return (
      <View style={styles.container}>

        <BackPreviousScreen style={styles.Config} text="Configuracões"/>
  
        <Image style={styles.perfil} source={{uri: userProfile.userPhoto}}></Image>
        <Text style={styles.nome}>{userProfile.userName}</Text>
        <Text style={styles.email}>{userProfile.userEmail}</Text>
        <TouchableOpacity style={styles.Edit} onPress={() =>  navigation.navigate('EditProfile')}><Text style={{color: 'white', fontSize: 20,}}>{t('Editar perfil')} </Text></TouchableOpacity>
  
    <View style={styles.line} />
        <ConfigItem text="Segurança" sourceIcon={require('../../../assets/icons/security.png')} onPress={() => navigation.navigate('Security')}/>

        <ConfigItem text="Notificação" sourceIcon={require('../../../assets/icons/notification.png')} onPress={() => navigation.navigate('Notifications')}/>

        <ConfigItem text="Idioma" sourceIcon={require('../../../assets/icons/language.png')}onPress={() => navigation.navigate('Language')}/>

    <View style={styles.line} />
  
      <ConfigItem text="Sobre" sourceIcon={require('../../../assets/icons/about.png')}onPress={() => navigation.navigate('About')}/>

      <ConfigItem text="Ajuda" sourceIcon={require('../../../assets/icons/help.png')} onPress={() => navigation.navigate('Help')}/>
  
    <View style={styles.line} />
  
        <TouchableOpacity style={styles.logout}>
          <Image  style={styles.icon} source={require('../../../assets/icons/logout.png')}></Image>
          <Text style={{fontSize: 20, color: 'red',}}>{t('Sair')} </Text>
        </TouchableOpacity>
  
  
        <StatusBar style="dark"/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      height: '100%',
      alignItems: 'center',
      paddingTop: 10
    },
  
    icon:{
      margin: 15,
      width: 35,
      height: 35,
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

    nome: {
      fontSize: 28,  
      fontWeight: 'bold',
    },

    email: {
      color: '#BFBFBF',
       fontSize: 14
    },
  
    Edit:{
      backgroundColor: '#62D9AD',
      padding: 15,
      paddingLeft: '20%',
      paddingRight: '20%',
      borderRadius: 360,
      margin: 20,
    },
  
    line:{ 
      height: 3,
      backgroundColor: '#D9D9D9',
      width: '90%',
  },
  
    topico:{
      flexDirection: 'row',
      alignItems: 'center',
      width: '85%',
    },
  
    seta:{
      height: 20,
      width: 20,
    },
  
    logout:{
      flexDirection: 'row',
      alignItems: 'center',
      width: '25%',
      marginTop: 15,
    },
  
  });  

export default Configs;
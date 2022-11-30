import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import '../../../components/Translate/i18n'
import { useTranslation } from 'react-i18next'
import BackPreviousScreen from '../../../components/BackPreviousScreen';

const About = () => {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.container}>
      <BackPreviousScreen text="Sobre"/>

          <Image style={styles.perfil} source={{uri: 'https://s3-alpha-sig.figma.com/img/741e/b001/3476b0f7f8c8cbc99e3cad0d67a3af48?Expires=1667174400&Signature=bd3MbexjyKUJdDncvtVn7xd8uQs60g0BqEDt-FFo6zf~aVDJQm2szdmIO6A~utyue4ID9WgL3RVU2ClOTxlV~AzXr7ZkcX7LbsLsF0ndtxLKPpg92cw5vmlYofVT4Jld60Bml~SOZeK6qaxEEVzp5~FgpNTcmeU0NeoAWQjn~tCd6WjFf8yErIK2nfjQzez8PvRrtaVRtu48SzwnhzH~fy21saqVm9VNrers-cauCPcX-3WyJSWckW7UvcnyVai0r6ef3tbEFcshJGpUxNG8VaQ84S8b74b84WulJ5XbIRxTn6sRo8Ch2Dsax8fMbf2iSHIWSmxf-adrIip8zkzdVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
          <Text style={{fontSize: 22,   fontWeight: 'bold',}}> {t('SOBRE')} </Text>
          <View style={styles.line} />
      <View>
          <Text> {t('ECOM projeto para TCC')} </Text>
          <Text>{t('Aplicativo para facilitar e auxiliar na procura e custo beneficio no preço  do combustivel')} </Text>
            <View style={{marginTop: 20}}>
                  <Text style={{fontWeight: 'bold',color: '#BFBFBF',}}>{t('Desenvolvedores:')} </Text>
                  <Text style={styles.ds}>Anderson Gonçalves</Text>
                  <Text style={styles.ds}>Eduarda Marcondes</Text>
                  <Text style={styles.ds}>Gabriel Henrique</Text>
                  <Text style={styles.ds}>Jefferson Monteiro</Text> 
                  <Text style={styles.ds}>Juliano Narezi</Text> 
            </View>
      </View> 
      <View style={styles.line} />
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
  IconSobre:{
    margin: '8%',
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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

  }

});

export default About;
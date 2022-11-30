import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import '../../components/Translate/i18n'
import { useTranslation } from 'react-i18next'
import BackPreviousScreen from '../../components/BackPreviousScreen';
import AddPriceStation from '../../components/AddPriceStation';
import AddPriceInput from '../../components/AddPriceInput/AddPriceInput';
import AddPriceGas from '../../components/AddPriceGas/AddPriceGas';

const AddPrice = ({ navigation }) => {
  const {t, i18n} = useTranslation();
  const [isShell, setShell] = useState(false);
  const [isBr, setBr] = useState(false);
  const [isIpiranga, setIpiranga] = useState(false);
  const [isSete, setSete] = useState(false);
  const [range, setRange] = useState(2)

  return(
    <View style={{alignItems: 'center', width: '100%'}}>
        
    <BackPreviousScreen text="Adicionar"/>
    
      <View style={styles.card}>

        <Text style={styles.combustivel}>{isShell ? "Posto Shell" : "" || isBr ? "Posto Petrobras" : "" || isIpiranga ? "Posto Ipiranga" : "" || isSete ? "Posto Sete Estrelas" : ""}</Text>

        <View style={{ flexDirection: "row",  justifyContent: 'center', alignItems: 'center',}}>
          
          <AddPriceStation value={isShell} onValueChange={setShell} source="Shell"/>

          <AddPriceStation value={isBr} onValueChange={setBr} source="BR"/>

          <AddPriceStation value={isIpiranga} onValueChange={setIpiranga} source="Ipiranga"/>

          <AddPriceStation value={isSete} onValueChange={setSete} source="SeteEstrelas"/>

        </View>

        <View style={styles.line} />

        <AddPriceInput placeholder="Nome do posto" source={require('../../../assets/icons/posto.png')}/>

        <View style={styles.line} />

        <AddPriceInput placeholder="Endereço do posto" source={require('../../../assets/icons/local.png')}/>

        <View style={styles.line} />

        <AddPriceGas combustivel="Gasolina"/>

        <AddPriceGas combustivel="Etanol" />

        <AddPriceGas combustivel="Diesel"/>

        <TouchableOpacity style={styles.Edit}><Text style={{color: 'white', fontSize: 15,}}>{t('Confirmar Sugestão de posto')} </Text></TouchableOpacity>
      
      </View>
    </View>
)
};

const styles = StyleSheet.create({
  
   card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
  }, 
  combustivel:{
    fontSize: 13,
    marginLeft: 10,
    color: '#BFBFBF',
  },
  line:{ 
  height: 1,
  backgroundColor: '#ededf2',
  marginTop: 10,
  width: 300,
  justifyContent: 'center',
  alignItems: 'center',
},
Edit:{
  backgroundColor: '#5EBF9B',
  padding: 10,
  paddingLeft: 30,
  paddingRight:30,
  borderRadius: 360,
  margin:10,
},
});

export default AddPrice;
import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';

const AddPriceGas = ({combustivel}) => {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.preco}>
    <View style={{flexDirection: 'row', width: "70%"}}>
      <Text style={styles.rs}>Preço: R$</Text>
      <TextInput style={styles.numb} placeholder={t('0,00')} placeholderTextColor="#BFBFBF" keyboardType = 'numeric'></TextInput>
    </View>
    <View style={styles.lineVert} />
      <Text style={styles.combustivel}> {t(combustivel)}</Text>
  </View>

  )
}

const styles = StyleSheet.create({
    preco:{
        alignItems: 'center',
        flexDirection: 'row',
        margin: 15,
        width: '70%',
      },

  rs:{
    fontSize: 20,
    marginRight: 10,
    fontWeight: 'bold',
  },

  numb:{
    fontSize:20,
    color: '#BFBFBF',
    fontWeight: 'bold',

  },
  lineVert:{
    height: 40,
    backgroundColor: '#ededf2',
    marginTop: 10,
    width: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  combustivel:{
    fontSize: 13,
    marginLeft: 10,
    color: '#BFBFBF',
  },  
      
})

export default AddPriceGas
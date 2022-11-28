import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput, Alert, Modal } from 'react-native';
import ActionModal from "./ModalFilter";
import { useNavigatio } from '@react-navigation/native'

import '../Translate/i18n'
import { useTranslation } from 'react-i18next'

const SearchBar = ({onChangeText}) => {
    const {t, i18n} = useTranslation();
    const [visibleModal, setVisibleModal] = useState(false); 

    return(
      <View style={styles.pesquisa}>
  
  
      <View style={styles.menu}>
        <TextInput 
        onChangeText={onChangeText}
        style={styles.algumPosto} 
        placeholder={t('Algum Posto Especifico')} 
        color='white' 
        placeholderTextColor="#fff" >
        </TextInput>
  
        <TouchableOpacity
          onPress={() => Alert.alert('baguio')}
          activeOpacity={0.5}>
              <Image
                style={styles.iconPes}
                source={require('../../../assets/icons/search.png')}
              />
        </TouchableOpacity>
      </View>
  
  
      <TouchableOpacity
          onPress={()=> setVisibleModal(true)}
          activeOpacity={0.5}>
            <Image
                style={styles.iconFil}
                source={require('../../../assets/icons/filter.png')}
          />
      </TouchableOpacity>
      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={()=> setVisibleModal(false)}
        >
            <ActionModal
            handleClose={()=> setVisibleModal(false)}
            />
        </Modal>
  </View>
    )
}

const styles = StyleSheet.create({

    pesquisa:{
      marginTop: 45,
      backgroundColor: '#62D9AD',
      width: '100%',
      height: 70,
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center'
    },

    menu: {
      width: '80%',
      height: 45,
      backgroundColor: '#5EBF9B',
      borderRadius: 8,
      flexDirection: "row",
      alignItems: 'center'
    },
    
    algumPosto:{
      marginLeft: 10,
      justifyContent: 'center',
      flex: 1,
      color: '#fff',
    },

    iconPes: {
      width: 25,
      height: 25,
      marginLeft: 10,
      marginRight: 10,
    },

    iconFil:{
      width: 25,
      height: 25,
      marginLeft: 25,
    },

    TextInput:{
      color: '#fff',
      backgroundColor: '#fff',
    }
  
  
  });
  
  export default SearchBar
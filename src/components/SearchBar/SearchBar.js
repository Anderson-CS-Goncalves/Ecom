import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput, Alert, Modal } from 'react-native';
import ActionModal from "./ModalFilter";

import '../Translate/i18n'
import { useTranslation } from 'react-i18next'

const SearchBar = () => {
    const {t, i18n} = useTranslation();

    const [visibleModal, setVisibleModal] = useState(false); 
    return(
      <View style={styles.pesquisa}>
                <View style={{ height: 2, backgroundColor: '#3E619B', marginTop: 2,}} />
  
  
      <View style={styles.menu}>
        <TextInput style={styles.algumPosto} placeholder={t('Algum Posto Especifico')} color='white' placeholderTextColor="#fff" >
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
      backgroundColor: '#62D9AD',
      width: '100%',
      height: 70,
      flexDirection: "row",
      justifyContent: 'center',
    },

    menu: {
      width: 300,
      height: 45,
      marginTop: 10,
      backgroundColor: '#5EBF9B',
      borderRadius: 10,
      flexDirection: "row"

    },
    
    algumPosto:{
      marginLeft: 10,
      justifyContent: 'center',
      marginTop: 10,
      flex: 1,
      color: '#fff',
    },

    iconPes: {
      width: 25,
      height: 25,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      textAlign:'left',
    },

    iconFil:{
      width: 25,
      height: 25,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 20,
    },

    TextInput:{
      color: '#fff',
      backgroundColor: '#fff',
    }
  
  
  });
  
  export default SearchBar
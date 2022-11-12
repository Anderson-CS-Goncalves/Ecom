import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import '../../../components/Translate/i18n'
import { useTranslation } from 'react-i18next'

const EditProfile = () => {
    const {t, i18n} = useTranslation();
    return (
      <View style={styles.container}>
        <View style={styles.IconSobre}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image style={styles.icon} source={{uri: 'https://s3-alpha-sig.figma.com/img/e5c9/0f27/d0b2b78fba43bd52551b2cdd8a1e4967?Expires=1666569600&Signature=X84gvhoXajTbB7SeuGDMewxj7pTBwEr470nlk26Plfa5stP715ahvfaY2lsZlIVd2jZpXHOMS5EQJEMtJ3zFLNrkaMmLk1YZdfAs897o-ckBIhDC7Sp4Wi7BIUpru6fIaiqGKHznFsRboAxckQFp62cicOuVeBKIZTH6lIg~oKOnMIxd4EZfzZ4oQFQXUFc7qjwecxXpfxDGS8cI~mqfr80ZH-o0ccoQi1UttRWgcmR1iOpyFklzj-dCYRr1m8oL7feGzP~uL3zA3E0F4TliVAaSoUdHfVJunLE56wUst8YQc6sO16oOj92DetJ5ASwAd7h5Llu38vRRkI-Lmhg0Sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
            </TouchableOpacity>
            <Text style={styles.Text}>{t('Editar perfil')} </Text>
        </View>
  
            <TouchableOpacity>
            <Image style={styles.perfil} source={{uri: 'https://i.pinimg.com/564x/7e/4f/5c/7e4f5ced8b75dfa364f52a3d7cecd4a3.jpg',}}></Image>
            </TouchableOpacity>
            <Text style={{fontSize: 22,   fontWeight: 'bold',}}> {t('ALTERAR FOTO')} </Text>
            <View style={styles.line} />
  
  
  
              <View style={styles.DadosUsu}>
                   <Text style={{fontWeight: 'bold',color: '#BFBFBF', fontSize: 17}}>{t('Suas Informações')}: </Text>
          <TextInput style={styles.ds} placeholder={t('Nome de Usuario')} placeholderTextColor= '#BFBFBF' ></TextInput>
          <View style={styles.lineDados} />
          <TextInput style={styles.ds} placeholder={t('Email')} placeholderTextColor= '#BFBFBF' ></TextInput>
          <View style={styles.lineDados} />
  
          <TouchableOpacity ><Text style={{color:"red", marginTop: 30}}>{t('Esqueci a Senha ou Alterar a senha')}*</Text></TouchableOpacity>
  
        </View> 
        <View style={styles.line} />
        <TouchableOpacity style={styles.Edit}><Text style={{color: 'white', fontSize: 20,}}>{t('Editar perfil')} </Text></TouchableOpacity>
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
  lineDados:{
    height: 2,
    backgroundColor: '#62D9AD',
    width: '90%',
  },
    line:{ 
    height: 3,
    margin: 15,
    backgroundColor: '#D9D9D9',
    width: '90%',
    },
    DadosUsu:{
        alignItems: "flex-start",
        width: '80%',
    },
    ds:{
    color: 'Black',
    marginTop: 30,
  },
  Edit:{
    backgroundColor: '#62D9AD',
    padding: 15,
    paddingLeft: '20%',
    paddingRight: '20%',
    borderRadius: 360,
    margin: 20,
  },

});

export default EditProfile;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import '../../../components/Translate/i18n'
import { useTranslation } from 'react-i18next'

const Help = () => {
      const {t, i18n} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.IconSobre}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.icon} source={{uri: 'https://s3-alpha-sig.figma.com/img/e5c9/0f27/d0b2b78fba43bd52551b2cdd8a1e4967?Expires=1666569600&Signature=X84gvhoXajTbB7SeuGDMewxj7pTBwEr470nlk26Plfa5stP715ahvfaY2lsZlIVd2jZpXHOMS5EQJEMtJ3zFLNrkaMmLk1YZdfAs897o-ckBIhDC7Sp4Wi7BIUpru6fIaiqGKHznFsRboAxckQFp62cicOuVeBKIZTH6lIg~oKOnMIxd4EZfzZ4oQFQXUFc7qjwecxXpfxDGS8cI~mqfr80ZH-o0ccoQi1UttRWgcmR1iOpyFklzj-dCYRr1m8oL7feGzP~uL3zA3E0F4TliVAaSoUdHfVJunLE56wUst8YQc6sO16oOj92DetJ5ASwAd7h5Llu38vRRkI-Lmhg0Sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
          </TouchableOpacity>
          <Text style={styles.Text}>{t('Ajuda')} </Text>
      </View>

          <Image style={styles.perfil} source={{uri: 'https://cdn-icons-png.flaticon.com/512/18/18436.png',}}></Image>
          <Text style={{fontSize: 22,   fontWeight: 'bold',}}> {t('AJUDA')} </Text>
          <View style={styles.line} />
      <View>
          <Text> {t('ECOM projeto para TCC')} </Text>
          <Text> {t('Caso duvida, algum problema no app para relatar ou possivel ideia para melhorar o sistema.')} </Text>
            <View style={{marginTop: 20}}>
                  <Text style={{fontWeight: 'bold',color: '#BFBFBF',}}>{t('Por favor consulte os Desenvolvedores:')} </Text>
                  <Text style={styles.ds}> Email: tccecom3ds@gmail.com</Text>
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

export default Help
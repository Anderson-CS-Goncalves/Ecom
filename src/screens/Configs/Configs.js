import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, alert, TouchableOpacity, Image } from 'react-native';
import '../../components/Translate/i18n'
import { useTranslation } from 'react-i18next'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const Configs = () => {
    const {t, i18n} = useTranslation();
    const navigation = useNavigation();
    const userProfile = useContext(UserContext);

    return (
      <View style={styles.container}>
        <View style={styles.Config}>
  
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.icon} source={{uri: 'https://s3-alpha-sig.figma.com/img/e5c9/0f27/d0b2b78fba43bd52551b2cdd8a1e4967?Expires=1666569600&Signature=X84gvhoXajTbB7SeuGDMewxj7pTBwEr470nlk26Plfa5stP715ahvfaY2lsZlIVd2jZpXHOMS5EQJEMtJ3zFLNrkaMmLk1YZdfAs897o-ckBIhDC7Sp4Wi7BIUpru6fIaiqGKHznFsRboAxckQFp62cicOuVeBKIZTH6lIg~oKOnMIxd4EZfzZ4oQFQXUFc7qjwecxXpfxDGS8cI~mqfr80ZH-o0ccoQi1UttRWgcmR1iOpyFklzj-dCYRr1m8oL7feGzP~uL3zA3E0F4TliVAaSoUdHfVJunLE56wUst8YQc6sO16oOj92DetJ5ASwAd7h5Llu38vRRkI-Lmhg0Sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
            </TouchableOpacity>
  
            <Text style={styles.Text}>{t('Configurações')} </Text>
        </View>
  
        <Image style={styles.perfil} source={{uri: userProfile.userPhoto}}></Image>
        <Text style={{fontSize: 17,   fontWeight: 'bold',}}>{userProfile.userName}</Text>
        <Text style={{color: '#BFBFBF', fontSize: 9}}>{userProfile.userEmail}</Text>
        <TouchableOpacity style={styles.Edit} onPress={() =>  navigation.navigate('EditProfile')}><Text style={{color: 'white', fontSize: 20,}}>{t('Editar perfil')} </Text></TouchableOpacity>
  
    <View style={styles.line} />
  
        <TouchableOpacity style={styles.topico} onPress={() => navigation.navigate('Security')}>
          <Image style={styles.icon} source={{uri:'https://s3-alpha-sig.figma.com/img/34b3/3192/63c82aefce29b4a8295f09ecf30a39ac?Expires=1666569600&Signature=bO07QGqCigQB2CRDf301XZgZ0S7vL~36dzUMukelzrsRxy57OUNKLjpt-2H8REaIo-Au9FbntvS6g2HFz2bYErUhWSPFRDNxoi-zEpwa2dYecAeT8kvAVjNX1557a48c13Gr07-EVYU7xdHitb-6pIdqWvOFdpSanGGObppnnXeN5yf5eUIXQPlg7hx2zgRwCjlHUw~n3zQ82jbO3HldYPMLtBYv1~V7Y~VMAVPIPHPhjBMT~hC63XH0Cijor8960Q6Grr0Iqziv6afOuV4Ezr6Alfktvaf1VCf9tl3CFtgBFuBiDiPYkwMGK-YhG5T1Ql1ElZystEAEpvcT5LbT1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
          <Text style={styles.Text}>{t('Segurança')} </Text>
          <Image style={styles.seta} source={{uri:'https://s3-alpha-sig.figma.com/img/379e/fc3a/2aae978f787eb25b01f719491a88dfa2?Expires=1666569600&Signature=HjsKHxzC1BxYsacgo-TunvV3de67b7jJpPkFAjs0GQIb5qT7s7cM6y7JAitahEBYn1KYJF2cyqB5k82-1h3nmj~6SI4I6l7ORM1zHdKSEv0jzjaCTG3kJ2OYHJP~GaDlpp0McWHjWzrOJY5trAsDEcBEAdKF323Ua20OZYUqYJMx4oJeHNu4tuG9JMWf~mgifHrqfpoJ4GbN9TliKp1S8xRGpcIkv3DnQMuSizZw3UVFjvfN2ITIaNQLulhKet1xbKS9JsOexvuxFqsHe7TgG5c32Uc5mKGZVP6YEPQ72vT4vWY4V7WNafSJIrnZ0KkCuuYpXD6QWiBH1h5wnDIjfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.topico} onPress={() => navigation.navigate('Notifications')}>
          <Image style={styles.icon} source={{uri:'https://s3-alpha-sig.figma.com/img/48ce/54e7/190ab52dfe13ea4c261685d3d5f837ad?Expires=1666569600&Signature=ajv4uQlyYF2AnOERf80hmYctQ0Wn9UV6GdsQrRi-qAI9usJP3Wv1X6PDBfMAVo1Qjn1SQTnpkfSMwyWDoHKtfgrmHJ2YxeZj7LFwRMPF9V8Q8czakljftyEj70th2anYsiS-4sRMPUsZutqJ27SiW~mAnOVCQ~gJBHsN2fS0Nzbbe6K8P5HyuRfS3D5C9-MabjsoBUGG7ehSoNxpNDI8n0jbUzl8tj-tj7kXBzf1fbL08BeS3NQjXK2Ti6gm4ovhX2IgSU~0gSrGXYk9ry-XuJZNRDzGTwUaCYRhP9UEwcudCry3EvOLH2G8qfihGVxtKvqRWuLfnB9-PsmDZLpJow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
          <Text style={styles.Text}>{t('Notificação')} </Text>
          <Image style={styles.seta} source={{uri:'https://s3-alpha-sig.figma.com/img/379e/fc3a/2aae978f787eb25b01f719491a88dfa2?Expires=1666569600&Signature=HjsKHxzC1BxYsacgo-TunvV3de67b7jJpPkFAjs0GQIb5qT7s7cM6y7JAitahEBYn1KYJF2cyqB5k82-1h3nmj~6SI4I6l7ORM1zHdKSEv0jzjaCTG3kJ2OYHJP~GaDlpp0McWHjWzrOJY5trAsDEcBEAdKF323Ua20OZYUqYJMx4oJeHNu4tuG9JMWf~mgifHrqfpoJ4GbN9TliKp1S8xRGpcIkv3DnQMuSizZw3UVFjvfN2ITIaNQLulhKet1xbKS9JsOexvuxFqsHe7TgG5c32Uc5mKGZVP6YEPQ72vT4vWY4V7WNafSJIrnZ0KkCuuYpXD6QWiBH1h5wnDIjfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.topico} onPress={() => navigation.navigate('Language')}>
          <Image style={styles.icon} source={{uri:'https://s3-alpha-sig.figma.com/img/b544/8889/01ea8047a2f8e6ba23de681239e91598?Expires=1666569600&Signature=Zgai3HyOpnVof-I8MCOr-qcBoE9f487oCTi66chBfJgP0yLmhAUC-HjJ6FjVa~98egiYGlQ6~vi3tWU7AnAmtRn-B0AA91V0QsDJeUhM5yy3BWpANHqGvIuS2NCkWqWFMQ0KJW8g6pBJqLZlqrGPA3HR5O8aiDJxeae6jr8FDSfoKLAhNmH7WFOA~~A7~OY--CXbnwxQoWUemY5tgqSOXQqymz0x7YP-MYrjp6KoZIvvpSIc0gJln3q68Ztj7XlMr7qiEVsbjGOG3orxV8GmZ7P0a2SnIGu3vOZ18GwcsOLRss15o5y-4Q5YjcpyF843WIAwQCwnrBmd98ysfE4ReQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
          <Text style={styles.Text}>{t('Idioma')} </Text>
          <Image style={styles.seta} source={{uri:'https://s3-alpha-sig.figma.com/img/379e/fc3a/2aae978f787eb25b01f719491a88dfa2?Expires=1666569600&Signature=HjsKHxzC1BxYsacgo-TunvV3de67b7jJpPkFAjs0GQIb5qT7s7cM6y7JAitahEBYn1KYJF2cyqB5k82-1h3nmj~6SI4I6l7ORM1zHdKSEv0jzjaCTG3kJ2OYHJP~GaDlpp0McWHjWzrOJY5trAsDEcBEAdKF323Ua20OZYUqYJMx4oJeHNu4tuG9JMWf~mgifHrqfpoJ4GbN9TliKp1S8xRGpcIkv3DnQMuSizZw3UVFjvfN2ITIaNQLulhKet1xbKS9JsOexvuxFqsHe7TgG5c32Uc5mKGZVP6YEPQ72vT4vWY4V7WNafSJIrnZ0KkCuuYpXD6QWiBH1h5wnDIjfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
        </TouchableOpacity>
  
    <View style={styles.line} />
  
        <TouchableOpacity style={styles.topico} onPress={() => navigation.navigate('About')}>
          <Image  style={styles.icon} source={{uri:'https://s3-alpha-sig.figma.com/img/0639/c05d/e0dd01917f882a015da755bd8c43a676?Expires=1666569600&Signature=SA4TA03hdeSVgFLw4vAryoWLvFNYS~LZ6pVlbchSmB74~2MXAiysZKIpd-VUHcNiJOhIjfgGM7G8ZtwJvSnv8nmWik6UNteTF7fcNLpIswwTXAvedAcXfMAhKjQdU~k0j45pnS5ojKYMGMGVitvReyFLWIL48PRyERHpjcFC8hOmK307w~o3Oat6~NjFRWkOA5X0pGjct915A9NGg3KFY594hHNb9LCHIol~EEHB-q~UH6EkYa9c0r2hOSYhr-JBGxQq8ZFS2ggp~egPBRNUTZEayhydmc7KlDxGDUNfvPv6D9ZA~wPYXzWM9yFqOPR33rZBhm5aoe9QZ8jlCSa2LQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
          <Text style={styles.Text}>{t('Sobre')} </Text>
          <Image  style={styles.seta} source={{uri:'https://s3-alpha-sig.figma.com/img/379e/fc3a/2aae978f787eb25b01f719491a88dfa2?Expires=1666569600&Signature=HjsKHxzC1BxYsacgo-TunvV3de67b7jJpPkFAjs0GQIb5qT7s7cM6y7JAitahEBYn1KYJF2cyqB5k82-1h3nmj~6SI4I6l7ORM1zHdKSEv0jzjaCTG3kJ2OYHJP~GaDlpp0McWHjWzrOJY5trAsDEcBEAdKF323Ua20OZYUqYJMx4oJeHNu4tuG9JMWf~mgifHrqfpoJ4GbN9TliKp1S8xRGpcIkv3DnQMuSizZw3UVFjvfN2ITIaNQLulhKet1xbKS9JsOexvuxFqsHe7TgG5c32Uc5mKGZVP6YEPQ72vT4vWY4V7WNafSJIrnZ0KkCuuYpXD6QWiBH1h5wnDIjfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.topico} onPress={() => navigation.navigate('Help')}>
          <Image  style={styles.icon} source={{uri:'https://s3-alpha-sig.figma.com/img/f546/0a93/31822deea61425f83b9e1b1c1da13364?Expires=1666569600&Signature=ftBZ6PkmBF~d2~ELpRqLGW~0v4qTsY3WkVDEj8ggYRVsV7egtw52bZuiO5WePlQv3~7WryyEhJKy6MxgRmVvgzyZnSbPiuUi40r0exOBCb-r4V1KekqJ5nhNborAfaJV0f4E~9FtzYTxOaUFugbahZ2NeDyqVa6xakVbNGXh-UcYxfVcjKMKWZ5EZz0UNcW~I4etNceuX-bVxL8Gx7jO~igaMBLk0zcprwZ2Nqq8IrTKjjL36b72M74WlOm~w3PTCMVGjgb9eQFX1q8cSfjCzVYC5nGyaH~TU5RkRStcyqgYtIGFrlUrrvW3Wof7kj-~kh6RFS30U1ktu68y0S8DCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
          <Text style={styles.Text}>{t('Ajuda')} </Text>
          <Image  style={styles.seta} source={{uri:'https://s3-alpha-sig.figma.com/img/379e/fc3a/2aae978f787eb25b01f719491a88dfa2?Expires=1666569600&Signature=HjsKHxzC1BxYsacgo-TunvV3de67b7jJpPkFAjs0GQIb5qT7s7cM6y7JAitahEBYn1KYJF2cyqB5k82-1h3nmj~6SI4I6l7ORM1zHdKSEv0jzjaCTG3kJ2OYHJP~GaDlpp0McWHjWzrOJY5trAsDEcBEAdKF323Ua20OZYUqYJMx4oJeHNu4tuG9JMWf~mgifHrqfpoJ4GbN9TliKp1S8xRGpcIkv3DnQMuSizZw3UVFjvfN2ITIaNQLulhKet1xbKS9JsOexvuxFqsHe7TgG5c32Uc5mKGZVP6YEPQ72vT4vWY4V7WNafSJIrnZ0KkCuuYpXD6QWiBH1h5wnDIjfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
        </TouchableOpacity>
  
    <View style={styles.line} />
  
        <TouchableOpacity style={styles.logout}>
          <Image  style={styles.icon} source={{uri:'https://s3-alpha-sig.figma.com/img/978e/c817/4c877832a73dbeb09056c7de88f4b5cd?Expires=1666569600&Signature=a6n8IkEv2j6XXIBDaNDerCVbZ1Boh5rN5Q9G8XRdsWbE7tcIe800wTljyr09lQ6y1hzc814ilEyD9qoAcPady95folbrnP5kKQq9H0VvHewDMoTelIK9Ss3mzLvG0LVDvBkPbN5Z208~nFX8F-jrcyOweYfg2vQ9EHIvzabGw66ACQviC~tV9QWpxFoCK5geM0XjiLmdrTiCe7Co-N9MPViHpyx7oI3pzbB6pkhu6XGXzfZUaFUwayoV7QIteAGK5j18vihqMPUUTbreOZJZNhOQQBxgbhDcic2tXXzGcGjcFnUAYGBx5FgI1li7a~fImw8LLl~VFZ55m39AAkqcpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
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
    },
  
    icon:{
      margin: 15,
      width: 35,
      height: 35,
    },
  
    Config:{
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
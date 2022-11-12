import { DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Security = () => {
    return (
        <View style={styles.container}>
          
          <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.icon} source={{uri: 'https://s3-alpha-sig.figma.com/img/e5c9/0f27/d0b2b78fba43bd52551b2cdd8a1e4967?Expires=1666569600&Signature=X84gvhoXajTbB7SeuGDMewxj7pTBwEr470nlk26Plfa5stP715ahvfaY2lsZlIVd2jZpXHOMS5EQJEMtJ3zFLNrkaMmLk1YZdfAs897o-ckBIhDC7Sp4Wi7BIUpru6fIaiqGKHznFsRboAxckQFp62cicOuVeBKIZTH6lIg~oKOnMIxd4EZfzZ4oQFQXUFc7qjwecxXpfxDGS8cI~mqfr80ZH-o0ccoQi1UttRWgcmR1iOpyFklzj-dCYRr1m8oL7feGzP~uL3zA3E0F4TliVAaSoUdHfVJunLE56wUst8YQc6sO16oOj92DetJ5ASwAd7h5Llu38vRRkI-Lmhg0Sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
              </TouchableOpacity>
              <Text>Segurança</Text>
          <StatusBar style="auto" />
        </View>
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    margin: 15,
    width: 35,
    height: 35,
  },
});

export default Security;
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView from 'react-native-maps';
import Map from '../../components/Map';

const HomeScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
   // <Text>bem vindo {route.params.profile.userName}</Text>
    //<Image style={styles.teste} source={{uri : route.params.profile.userPhoto}}/>
  return (
    <View>
        <Map />
    </View>
  )
}

const styles = StyleSheet.create({
    root : {
        alignItems: "center",
        padding: '5%',
    },
    map: {
        width: '100%',
        height: '100%'
    },
    cadastro: {
        fontSize: 32,
        color: '#62D9AD',
        marginBottom: 32
    },
    space: {
        marginTop: 60
    },
    teste: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    }
})

export default HomeScreen
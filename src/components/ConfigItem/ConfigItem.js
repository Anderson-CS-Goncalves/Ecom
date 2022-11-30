import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const BackPreviousScreen = ({onPress, sourceIcon, text}) => {

    return (
        <TouchableOpacity style={styles.topico} onPress={onPress}>
          <Image style={styles.icon} source={sourceIcon}></Image>
          <Text style={styles.Text}>{text}</Text>
          <Image style={styles.seta} source={require('../../../assets/icons/right-arrow.png')}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    topico:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
      },
      icon:{
        margin: 15,
        width: 35,
        height: 35,
      },
      Text:{
        color: '#BFBFBF',
        border: 20,
        borderColor: '#62D9AD',
        fontSize: 17,
        marginRight: '30%',
        width: '35%',
      },
      seta:{
        height: 20,
        width: 20,
      },    
    
});


export default BackPreviousScreen
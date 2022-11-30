import { DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Checkbox from 'expo-checkbox';

const AddPriceStation = ({value, onValueChange, source}) => {
    const imagesPath = {
        Shell: require('../../../assets/images/stations/Shell.png'),
        SeteEstrelas: require('../../../assets/images/stations/Sete-Estrelas.png'),
        BR: require('../../../assets/images/stations/BR.png'),
        Ipiranga: require('../../../assets/images/stations/Ipiranga.png')
      };
    return (
        <View style={styles.iconBan}>
        <Checkbox style={styles.checkbox} value={value} onValueChange={onValueChange} color='#62D9AD'/>
            <Image
              style={{ borderRadius: 4, height: 35, width: 40,}}
              source={imagesPath[source]}/>
        </View>
      );
}


const styles = StyleSheet.create({
    checkbox:{
        marginBottom:5,
      },
    iconBan:{
        marginTop: 20,
        marginLeft: '5%',
        marginRight:'5%',
    },
});

export default AddPriceStation;

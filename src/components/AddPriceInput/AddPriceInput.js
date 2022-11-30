import { DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

const AddPriceInput = ({source, placeholder}) => {
    const {t, i18n} = useTranslation();
    return (
      <View style={styles.nomeEndereco}>
        <Image 
        style={styles.miniIcon}
        source={source}/>
        <TextInput  placeholder={t(placeholder)} color='black' placeholderTextColor="#BFBFBF" style={styles.TextInput}></TextInput>
      </View>
    );
}


const styles = StyleSheet.create({
    nomeEndereco:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        width: 300,
        backgroundColor: '#D9D9D9',
        borderRadius: 12,
        flexDirection: 'row'
      },
    miniIcon:{
        width: 20,
        height: 20,
        margin: 10
      },
    textInput: {
        marginRight: 10
    }
});

export default AddPriceInput;

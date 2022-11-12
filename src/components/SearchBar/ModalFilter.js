import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, SafeAreaView, TouchableOpacity, Image, Alert} from 'react-native';
import Slider from '@react-native-community/slider';

import '../Translate/i18n'
import { useTranslation } from 'react-i18next'

export default function ActionModal ({handleClose}) {

  const {t, i18n} = useTranslation();

  const [range, setRange] = useState(2)

  const [defaultRating, setdefaultRating] = useState(2)
  const [maxRating, setmaxRating] = useState([1,2,3,4,5])

  const startImgFilled = 'https://s3-alpha-sig.figma.com/img/331c/b863/c33fae4f4153068bd38f5953ea0c1c36?Expires=1665360000&Signature=XxYNHyvFxF7Dr4FpDmjzddgKCum7pElO7hE8wO6SBO7OjzVThH01mKy578tEhUlPPwhVU-PhdjY76WbD30NCT5BbNmi5ntMAGfN3xcBGTo5S6q2gYeu8sK4w9lf0377O1qxnEQDHCZCZuizOFU~~KV8d5I9npoLHOX1WG4wE5xmHuk6jU7apnQr086qHRIXG8mx5M8vvq00-s7S-Whm1784vBXyK5ypJ-hHn6asBYbzPd7u9wS7cX-i4svtgCNT7h58CPBvmkVqFtwVX4Q9blYgtw~hNwyd3ukHXuLvpd9cjSSYYA7MZWHSglTBOLflGg1a0puD09wSc4ppHYNRR5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
  const starImgCorner = 'https://s3-alpha-sig.figma.com/img/6d9d/25cb/afdaf9faa1c5b313f2ce55493f107f86?Expires=1665360000&Signature=J0hm2IAEf1VtdXnC1Tq7XdIOVdGx7AcUmCaw938g4UhJXf0VIY-2-qVI3rZYv~JUY0AAoTtGK5J1TgyqEfx4MiOmH6zbdFyTe7JU4oWLlHW2tfpqwcmijpAriTXY15GgQHbh8CUWBnT~wYsq1iZE6UABFygZq8WVB2XiQehP-X97KOGMtxOBB0eeQtqQqp~UEPYjrVrAUuBCcdGkjK6GlLpdOqbd7HHz-jLowEnrRxuWDFRgYrwyA~mluG9SvqLpWe~8kMdXeb7VrB9CHqC9u35~SVMfNU9vkg~~GHrFuQCELJusU5hIJ8Ra79culd3GxI8ADs-CXb3v5ehiRuEnoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' 

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarstyle}>
        {
          maxRating.map((item, key) => {
            return (
              <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}
              >

                  <Image style={styles.starImgStyle}  
                  onPress={() =>{Alert.alert(defaultRating + '/' + maxRating.length);}}
                  source={
                    item <= defaultRating
                    ? {uri: startImgFilled}
                    : {uri: starImgCorner}
                  }
                 
                  />

              </TouchableOpacity>
            )
          })
        }


      </View>
    )
  };

  return (
    <View style={styles.container}>
        <StatusBar style="dark"/>
    <SafeAreaView style={styles.Modal}>



    <View style={{flexDirection: "row"}}>
      <TouchableOpacity onPress={handleClose} style={{paddingTop: "10%"}}>
          <Image 
          style={{height:25, width: 25}}
          source={require('../../../assets/icons/back.png')}></Image> 
      </TouchableOpacity>

      <Text style={{paddingTop: "10%", paddingRight: '30%',paddingBottom: '5%', paddingLeft: '20%',  fontWeight: "bold"}}>{t('FILTROS')} </Text>
    </View>



    <View style={{width: '100%', height: 2, backgroundColor: '#BFBFBF', margin: '5%'}}></View>

    <Text style={{fontWeight: "bold"}}>{t('Tipo de combustível')} </Text>
          <View style={{paddingTop: '2%',flexDirection: "row"}}>  
            <TouchableOpacity style={styles.gaso} color="#D9D9D9"><Text>{t('Gasolina')} </Text></TouchableOpacity>
            <TouchableOpacity style={styles.gaso} color="#D9D9D9"><Text>{t('Etanol')} </Text></TouchableOpacity>
          </View>

          <View style={{paddingTop: '2%',flexDirection: "row"}}>
            <TouchableOpacity style={styles.gaso} color="#D9D9D9"><Text>{t('Diesel')} </Text></TouchableOpacity>
            <TouchableOpacity style={styles.gaso} color="#D9D9D9"><Text>{t('Agua')} </Text></TouchableOpacity>
          </View>
      
         
    <View style={{width: '100%', height: 2, backgroundColor: '#BFBFBF', margin: '5%' }}></View>



      <Text style={{fontWeight: "bold"}}>{t('Avaliação')} </Text>
      <CustomRatingBar/>
      <Text style={styles.textStyle}>
        {defaultRating + '/' + maxRating.length}
      </Text>


     <View style={{width: '100%', height: 2, backgroundColor: '#BFBFBF', margin: '5%' }}></View>

     <Text style={{fontWeight: "bold"}}>{t('Preço')} </Text>
     <View style={styles.sliderStyle}>
      <Text style={{fontSize: 20, }}>R$0    {t('até')}    R${Math.floor(range*100)}</Text>
      <Slider
        style={{width: 250, height: 40}}
        onValueChange={(value) => setRange(value)}
        minimumValue={0}
        maximumValue={1}
      />
    </View>

    </SafeAreaView>
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  Modal: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '70%',
    borderRadius: 30,
  },

  gaso:{
    padding: 10, 
    backgroundColor: '#D9D9D9',
    marginLeft: '5%',
    width: '40%',
    alignItems: 'center'
  },
  customRatingBarstyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30
  },
  starImgStyle:{
    width: 40,
    height: 40,
    resizeMode: 'cover'
  },
  sliderStyle:{
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center'
  }
});
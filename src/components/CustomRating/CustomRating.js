import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

import '../Translate/i18n'
import { useTranslation } from 'react-i18next'

const CustomRatingBar = () => {
    const {t, i18n} = useTranslation();

    const [defaultRating, setdefaultRating] = useState(0)
    const [maxRating, setmaxRating] = useState([1])
  
    const startImgFilled = 'https://s3-alpha-sig.figma.com/img/ff5c/5ff6/a8ca28fe6f28d2240f76eec3359d36af?Expires=1665360000&Signature=AikqTToOhTQ3GbTC~j8DaJhehr~egbuDRYqGpNSfwUf-jDJsHNfIIGgR~kWZ~yhSvs1OpvDNqCLOnsyed5TQF02LB0z5m2TZkM1luhMzytWzcOTGms4KDon8opdWQsAaV6nO9fpISgG0686HlUxf-Pi6fVrLHCg7YOOdwZdJelmWQn2WnPbHfStfOpfGEJ4dtfQfcGAtzu5szypBdCmRE9qTr0~ld5fUsNLvO~ka5rMZSdL0uqC-j3vvauNKBBZtZuaLnhqnik9WrVjysQyPzEidHkr05ADjQEcfaKqG0yWiwxsd0FqjheUvYnuT0whJfXbGeqQGR1Hs1GNaeNo0cA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    const starImgCorner = 'https://s3-alpha-sig.figma.com/img/ff45/725e/975ca0b7989c9fec716205068e724ce0?Expires=1665360000&Signature=fmC7Dtxjj8CwKA9440tbfGjVZdAKM9PlffygSguuU6NpXMVh~EcfvUBQ8p7trbeEE~2pVG3ZZH9a5VKO-YtXVA-RKt4U9n38RaexARlt~CufBn-vnKVZUQGqVW7yNHSA-EiQc49xnmQgdJOL5sjYouADwAp9msUvVfHDAoZmP1p7NkNggtnuadzuoFM5GP~WTixF1NWAAG02uaI0fgdZAxB6Y2rRoizTdvF~K-Y9A4r5LB6jm1l1qKXoEgffCZEaJM0bBncuk3IMZLCTeegEsJcSTtbKSNQxBrqeuVzrerDjkdOebU2bgyaRTG6r~4aWam1bucpyzv9~Yba8jrPuMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' 
  


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

  const styles = StyleSheet.create({
  
  
    card: {
      marginTop: 10,
      height: 120,
      width: 380,
      backgroundColor: '#fff',
      borderRadius: 10,
      flexDirection: "row"
    },
  
    descricao:{
      marginTop: 10,
      marginLeft: 10,
      width: 200,
    },
  
    iconBan:{
      marginTop: 2,
      marginLeft: 0,
      height: 35,
      width: 40,
    },

    nomePosto: {
      fontSize: 16,
      marginLeft: 10,
      color: 'black',
      fontWeight: 'bold',
      alignItems: 'flex-start',
    },
  
    ruaPosto:{
      marginTop: 10,
      fontSize: 13,
      color: '#BFBFBF',
    },
  
  preco:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  
    numb:{
      fontSize:16,
      color: 'black',
      fontWeight: 'bold',
    },
  
    rs:{
      fontSize: 16,
    },
  
    dias:{
      fontSize: 10,
      color: '#BFBFBF',
    },

    iconAvali:{
      height: 15,
      width: 75,
      marginLeft: 5,
    },

    line:{ 
    height: 1,
    backgroundColor: '#ededf2',
    marginTop: 10,
    width: 300,
},

  kmSalvo:{
    marginTop: 15,
    alignItems: 'flex-end',
    width: 70,
  },

  iconSalvo:{
    height: 20,
    width: 20,
  },



  km:{
    marginTop: 40,
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',

  },

  lineDiv:{
    flexDirection: "row",
    height: '85%',
    width: 2,
    backgroundColor: '#BFBFBF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2%',
    marginLeft: '2%',
  },

  save: {
    opacity: 10,
  },
  customRatingBarstyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  starImgStyle:{
    width: 20,
    height: 20,
    resizeMode: 'cover'
  },
  sliderStyle:{
    justifyContent: 'center',
    alignItems: 'center'
  }

  });  

export default CustomRatingBar 
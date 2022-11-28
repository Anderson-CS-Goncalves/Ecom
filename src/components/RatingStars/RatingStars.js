import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

import '../Translate/i18n'
import { useTranslation } from 'react-i18next'

const RatingStars = ({ratio}) => {
    if(ratio === 0) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/0.png')}/>
          )
    }
    else if(ratio > 0.4 && ratio <= 0.7) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/0-5.png')}/>
          )
    }
    else if(ratio > 0.7 && ratio <= 1.2) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/1.png')}/>
          )
    }
    else if(ratio > 1.2 && ratio <= 1.7) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/1-5.png')}/>
          )
    }
    else if(ratio > 1.7 && ratio <= 2.2) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/2.png')}/>
          )
    }
    else if(ratio > 2.2 && ratio <= 2.7) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/2-5.png')}/>
          )
    }
    else if(ratio > 2.7 && ratio <= 3.2) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/3.png')}/>
          )
    }
    else if(ratio > 3.2 && ratio <= 3.7) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/3-5.png')}/>
          )
    }
    else if(ratio > 3.7 && ratio <= 4.2) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/4.png')}/>
          )
    }
    else if(ratio > 4.2 && ratio <= 4.7) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/4-5.png')}/>
          )
    }
    else if(ratio > 4.7 && ratio <= 5) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/5.png')}/>
        )
    }
    else {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/0.png')}/>
        )
    }
    
  };

  const styles = StyleSheet.create({
    iconAvali:{
        height: 12,
        width: 75,
        marginLeft: 5,
      },
  });  

export default RatingStars; 
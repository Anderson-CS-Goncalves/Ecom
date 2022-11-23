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
    else if(ratio > 0 && ratio <= 0.5) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/0-5.png')}/>
          )
    }
    else if(ratio > 0.5 && ratio <= 1) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/1.png')}/>
          )
    }
    else if(ratio > 1 && ratio <= 1.5) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/1-5.png')}/>
          )
    }
    else if(ratio > 1.5 && ratio <= 2) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/2.png')}/>
          )
    }
    else if(ratio > 2 && ratio <= 2.5) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/2-5.png')}/>
          )
    }
    else if(ratio > 2.5 && ratio <= 3) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/3.png')}/>
          )
    }
    else if(ratio > 3 && ratio <= 3.5) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/3-5.png')}/>
          )
    }
    else if(ratio > 3.5 && ratio <= 4) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/4.png')}/>
          )
    }
    else if(ratio > 4 && ratio <= 4.5) {
        return (
            <Image 
            style={styles.iconAvali}
            source={require('../../../assets/images/rating/4-5.png')}/>
          )
    }
    else if(ratio > 4.5 && ratio <= 5) {
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
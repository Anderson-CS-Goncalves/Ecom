import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import '../../components/Translate/i18n'
import { useTranslation } from 'react-i18next'

import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';

const Stations = () => {
    const {t, i18n} = useTranslation();
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='#e0e0e0' style="auto" />
            <SearchBar />

            <ScrollView>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards/>
            <Cards />
            <View style={{height:90}}></View>
            </ScrollView>
  
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      paddingTop: 30,
    },
  });

export default Stations
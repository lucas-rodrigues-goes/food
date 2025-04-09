import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/general';

// Assets
const logo = require('../assets/images/logo_food_hall.png');

function SplashScreen ({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Inicio'); // Use o nome da rota como string
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashContainer || { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#fff',
    }}>
      <Image 
        source={logo} 
        style={styles.logoSplash || {
          width: 300,
          height: 300,
          resizeMode: 'contain',
        }}
        resizeMode="contain"
      />
    </View>
  );
};

module.exports = SplashScreen;
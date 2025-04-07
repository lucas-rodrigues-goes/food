import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getItems } from './modules/Cart';
import styles from './style/general';

// Screens
import Home from './screens/Home';
import Events from './screens/Events';
import Restaurants from './screens/Restaurants';
import RestaurantInfo from './screens/RestaurantInfo';
import MenuItem from './screens/menuItem';
import SplashScreen from './screens/SplashScreen';

// Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

// Options
const hidden = { drawerItemStyle: { display: 'none' } };

// Cart icon component for the header
const CartIcon = ({ navigation }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = async () => {
    try {
      const cartItems = await getItems();
      setCartCount(cartItems.length);
    } catch (error) {
      console.error('Error loading cart count:', error);
      setCartCount(0);
    }
  };

  useEffect(() => {
    // Initial load
    updateCartCount();

    // Refresh when screen is focused
    const unsubscribe = navigation.addListener('focus', updateCartCount);

    // Periodic check every 1.5 seconds
    const interval = setInterval(updateCartCount, 1500);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, [navigation]);

  return (
    <TouchableOpacity 
      style={styles.cartIcon} 
      onPress={() => navigation.navigate('Carrinho de Compras')}
    >
      <Ionicons name="cart" size={24} color="black" />
      {cartCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Splash" 
        screenOptions={({ navigation }) => ({
          headerShown: true,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      >
        <Drawer.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false, ...hidden }} 
        />
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Eventos" component={Events} />
        <Drawer.Screen name="Restaurantes" component={Restaurants} />
        <Drawer.Screen 
          name="Informações do Restaurante" 
          component={RestaurantInfo} 
          options={hidden} 
        />
        <Drawer.Screen 
          name="Item do Cardápio" 
          component={MenuItem} 
          options={hidden} 
        />
        <Drawer.Screen 
          name="Carrinho de Compras" 
          component={Events} 
          options={hidden} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
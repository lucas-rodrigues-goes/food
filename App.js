import * as React from 'react';

const { View, TouchableOpacity, StyleSheet, Text } = require('react-native');
const { Ionicons } = require ('@expo/vector-icons');
const {ShoppingCart} = require('./modules/Cart');

// Screens
const Home = require('./screens/Home');
const Events = require('./screens/Events');
const Restaurants = require('./screens/Restaurants');
const RestaurantInfo = require('./screens/RestaurantInfo');
const MenuItem = require('./screens/menuItem');
const SplashScreen = require('./screens/SplashScreen');

// Components
const { createDrawerNavigator } = require('@react-navigation/drawer');
const { NavigationContainer } = require('@react-navigation/native')

const Drawer = createDrawerNavigator();

// Options
const hidden = {drawerItemStyle: {display: 'none'}}

// Cart icon component for the header
const CartIcon = ({ navigation }) => {
  return (
    <TouchableOpacity 
      style={styles.cartIcon} 
      onPress={() => {
        // Navigate to your cart screen when the icon is pressed
        navigation.navigate('Carrinho de Compras')
      }}
    >
      <Ionicons name="cart" size={24} color="black" />
      {/* Optional: Add a badge for cart items count */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>3</Text>
      </View>
    </TouchableOpacity>
  );
};

// Output
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
        <Drawer.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Inicio" component={Home}/>
        <Drawer.Screen name='Eventos' component={Events}/>
        <Drawer.Screen name='Restaurantes' component={Restaurants}/>
        
        {/* Hidden screen */}
        <Drawer.Screen name='Informações do Restaurante' component={RestaurantInfo} options={hidden}/>
        <Drawer.Screen name='Item do Cardápio' component={MenuItem} options={hidden} />
		    <Drawer.Screen name='Carrinho de Compras' component={Events} options={hidden} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cartIcon: {
    marginRight: 15,
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
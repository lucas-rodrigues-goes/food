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

// Components
const { Navigator, Screen } = require('@react-navigation/drawer').createDrawerNavigator()
const { NavigationContainer } = require('@react-navigation/native')

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
      <Navigator 
        initialRouteName="Inicio"
        screenOptions={({ navigation }) => ({
          headerRight: () => <CartIcon navigation={navigation} />,
          // Other default screen options
        })}
      >
        <Screen name="Inicio" component={Home}/>
        <Screen name='Eventos' component={Events}/>
        <Screen name='Restaurantes' component={Restaurants}/>
        
        {/* Hidden screen */}
        <Screen name='Informações do Restaurante' component={RestaurantInfo} options={hidden}/>
        <Screen name='Item do Cardápio' component={MenuItem} options={hidden} />
		<Screen name='Carrinho de Compras' component={Events} options={hidden} />
      </Navigator>
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
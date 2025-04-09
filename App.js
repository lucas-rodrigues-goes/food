import * as React from 'react';

// Components
const { useEffect, useState } = require('react');
const { View, TouchableOpacity, StyleSheet, Text } = require('react-native');
const { Ionicons } = require('@expo/vector-icons');
const { getItems } = require('./modules/Cart');

// Screens
const Home = require('./screens/Home');
const Events = require('./screens/Events');
const Restaurants = require('./screens/Restaurants');
const RestaurantInfo = require('./screens/RestaurantInfo');
const MenuItem = require('./screens/menuItem');
const SplashScreen = require('./screens/SplashScreen');
const CartContent = require('./screens/CartContent');

// Navigation
const { createDrawerNavigator } = require('@react-navigation/drawer');
const { NavigationContainer } = require('@react-navigation/native');

const Drawer = createDrawerNavigator();

// Options
const hidden = { drawerItemStyle: { display: 'none' } };

// Cart icon component for the header
const CartIcon = ({ navigation }) => {
	// Dynamic Variables
	const [cartCount, setCartCount] = useState(0);

	// Style
	const style = StyleSheet.create({
		cartIcon: {
			marginRight: 15,
			position: 'relative',
		},
		badge: {
			position: 'absolute',
			right: -8,
			top: -5,
			backgroundColor: '#46c',
			borderRadius: 9,
			minWidth: 18,
			height: 18,
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 4,
		},
		badgeText: {
			color: 'white',
			fontSize: 12,
			fontWeight: 'bold',
		}
	})

	// Update component
	const updateCartCount = async () => {
			const cartItems = await getItems();
			let amount = 0;
			for (const key in cartItems) {
				const item = cartItems[key]
				amount += item.quantity
			}
			setCartCount(amount);
	};

	// Initial load
	useEffect(() => {
		updateCartCount();

		// Refresh when screen is focused
		const unsubscribe = navigation.addListener('focus', updateCartCount);

		// Refresh polling for every 1.5s
		const interval = setInterval(updateCartCount, 200);

		return () => {
			unsubscribe();
			clearInterval(interval);
		};
	}, [navigation]);

	// Output
	return (
		<TouchableOpacity 
			style={style.cartIcon} 
			onPress={() => navigation.navigate('Carrinho de Compras')}
		>
			<Ionicons name="cart" size={24} color="black" />
			{cartCount > 0 && (
				<View style={style.badge}>
					<Text style={style.badgeText}>{cartCount}</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator 
				initialRouteName="Inicio" 
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
					component={CartContent} 
					options={hidden} 
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
import React, { useEffect } from 'react';

// Components
const { View, Image } = require('react-native');

// Assets
const logo = require('../assets/images/logo_food_hall.png');

function SplashScreen ({ navigation }) {
	// On window load
	useEffect(() => {
		const timer = setTimeout(() => {
			navigation.navigate('Inicio');
		}, 3000);

		return () => clearTimeout(timer);
	}, [navigation]);

	// Output
	return (
		<View style={{ 
			flex: 1, 
			justifyContent: 'center', 
			alignItems: 'center',
			backgroundColor: '#fff'
		}}>
		<Image 
			source={logo} 
			style={{
				width: 200,
				height: 200,
				resizeMode: 'contain',
			}}
			resizeMode="contain"
		/>
		</View>
	);
};

module.exports = SplashScreen;
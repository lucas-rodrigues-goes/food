import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking, TouchableOpacity } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button, ImageButton } = require('../components/buttons')
const styles = require('../style/general');

// Assets
const restaurantsInfo = require('../assets/data/restaurants_info.json')
const logoImage = require('../assets/images/logo_food_hall.png')

// Handlers
const handleRestaurantInfo = function (restaurant) {navigation.navigate('Eventos', restaurant)};

// Output
module.exports = function Restaurants({ navigation }) {

	return (
		<ScrollView>
		  <Center>
			{/* Logo */}
			<Image
			  style={styles.logo}
			  source={logoImage} 
			/>
	
			{/* Iterando sobre os restaurantes */}
            {restaurantsInfo.map((restaurant, index) => (
				<TouchableOpacity style={{width: '100%'}} onPress={() => handleRestaurantInfo(restaurant)}>
					<Container key={index} title={restaurant.name}>
						{/* <Center>
							<Image
								source={restaurant.image}
							/>
						</Center> */}
					</Container>
				</TouchableOpacity>
            ))}
		  </Center>
		</ScrollView>
	  );
};
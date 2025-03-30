import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking, View, TouchableOpacity } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button, IconButton } = require('../components/buttons')
const styles = require('../style/general');

// Assets
const whatsappIcon = require('../assets/images/whatsapp_logo.png')
const facebookIcon = require('../assets/images/facebook_logo.png')
const instagramIcon = require('../assets/images/Instagram_logo.png')
const emailIcon = require('../assets/images/email_logo.png')
const ifoodIcon = require('../assets/images/ifood_logo.png')
const restaurantImage = require('../assets/images/boteco_sample_img.jpg')
const menuImage = require('../assets/images/menu_sample_img.png')

// Output
module.exports = function RestaurantInfo({ route, navigation }) {
    const restaurant = route.params;

	// Button Handlers
	const handleOpenMap = () => {
		const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`
		Linking.openURL(url)
	}
	const handleCall = () => Linking.openURL(`tel:${restaurant.phone}`)
	const handleWhatsApp = () => Linking.openURL(`https://wa.me/${restaurant.whatsapp}`)
	const handleEmail = () => Linking.openURL(`mailto:${restaurant.email}?subject=Contato%20Pátio`)

    // Create Menu List
	const menuElements = []
	for (const menuItem of restaurant.menu) {
		// Handle element navigation
		const navigate = () => navigation.navigate('Item do Cardápio', menuItem)

		// Add element to list
		menuElements.push(
				<Container>
					<TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between'}} onPress={navigate}>
						<Image
                            style={styles.icon}
							source={menuImage}
						/>
                        <Text style={styles.contactText}>{menuItem.name}</Text>
                        <Text style={styles.price}>{menuItem.price}</Text>
					</TouchableOpacity>
				</Container>

		)
	}


	return (
		<ScrollView>
		  <Center>
			{/* Informações da loja */}
			<Container title={restaurant.name}>
				<Text style={styles.contactText}>{restaurant.description}</Text>
				<Center>
                    <Image 
                        style={styles.image}
                        source={restaurantImage}
                    />

                    {/* Redes Sociais da loja */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                        <IconButton
                            source={facebookIcon}
                            onPress={() => Linking.openURL(restaurant.facebook)}
                        />
                        <IconButton
                            source={instagramIcon}
                            onPress={() => Linking.openURL(restaurant.instagram)}
                        />
                        <IconButton
                            source={whatsappIcon}
                            onPress={handleWhatsApp}
                        />
                        <IconButton
                            source={emailIcon}
                            onPress={handleEmail}
                        />
                        <IconButton
                            source={ifoodIcon}
                            onPress={handleEmail}
                        />
                    </View>

                    <Text style={[styles.contactText, {marginTop: 15}]}>{restaurant.phone}</Text>
                    <Button
                        title="Ligar Agora"
                        onPress={handleCall}
                        color="#007bff"
                    />
                    <Button
                        title="Visitar Website"
                        onPress={() => Linking.openURL(restaurant.website)}
                        color="#6c757d"
                    />
				</Center>
			</Container>
            <Container title={"Cardápio"}>
                {menuElements}
            </Container>
		  </Center>
		</ScrollView>
	  );
};
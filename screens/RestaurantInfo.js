import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking, View } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button, IconButton } = require('../components/buttons')
const styles = require('../style/general');

// Assets
const whatsappIcon = require('../assets/images/whatsapp_logo.png')
const facebookIcon = require('../assets/images/facebook_logo.png')
const instagramIcon = require('../assets/images/Instagram_logo.png')
const emailIcon = require('../assets/images/email_logo.png')
const ifoodIcon = require('../assets/images/ifood_logo.png')

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

	return (
		<ScrollView>
		  <Center>
			{/* Informações da loja */}
			<Container title={restaurant.name}>
				<Text style={styles.contactText}>{restaurant.description}</Text>
				<Center>
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
		  </Center>
		</ScrollView>
	  );
};
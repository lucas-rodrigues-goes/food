import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button, ImageButton } = require('../components/buttons')
const styles = require('../style/general');

// Assets
const restaurantsInfo = require('../assets/data/restaurants_info.json')
const logoImage = require('../assets/images/logo_food_hall.png')

// Output
module.exports = function Reastaurants({ navigation }) {

	// Button Handlers
	const handleOpenMap = () => {
		const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`
		Linking.openURL(url)
	}
	const handleCall = () => Linking.openURL(`tel:${phone}`)
	const handleWhatsApp = () => Linking.openURL(`https://wa.me/${whatsapp}`)
	const handleEmail = () => Linking.openURL(`mailto:${email}?subject=Contato%20Pátio`)

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
                <Container key={index} title={restaurant.name}>
                    <Center>
                        <Image
                            source={restaurant.image}
                        />
                    </Center>
                    <Button
                        title="Ligar Agora"
                        onPress={() => handleCall(restaurant.phone)}
                        color="#007bff"
                    />
                    <Button
                        title="Enviar Mensagem"
                        onPress={() => handleWhatsApp(restaurant.whatsapp)}
                        color="#25D366"
                    />
                    <Button
                        title="Enviar E-mail"
                        onPress={() => handleEmail(restaurant.email)}
                        color="#dc3545"
                    />
                </Container>
            ))}
		  </Center>
		</ScrollView>
	  );
};
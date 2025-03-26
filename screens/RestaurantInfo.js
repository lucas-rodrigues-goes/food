import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button } = require('../components/buttons')
const styles = require('../style/general');

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
                    <Button
                        title="Facebook"
                        onPress={() => Linking.openURL(restaurant.facebook)}
                        color="#3b5998"
                    />
                    <Button
                        title="Instagram"
                        onPress={() => Linking.openURL(restaurant.instagram)}
                        color="#E1306C"
                    />
                    <Text style={[styles.contactText, {marginTop: 15}]}>{restaurant.phone}</Text>
                    <Button
                        title="Ligar Agora"
                        onPress={handleCall}
                        color="#007bff"
                    />
            
                    <Button
                        title="Enviar Mensagem"
                        onPress={handleWhatsApp}
                        color="#25D366"
                    />

                    <Button
                        title="Visitar Website"
                        onPress={() => Linking.openURL(restaurant.website)}
                        color="#6c757d"
                    />

                    <Button
                        title="Enviar E-mail"
                        onPress={handleEmail}
                        color="#dc3545"
                    />

                    <Button
                        title="Abrir iFood"
                        onPress={handleEmail}
                        color="#e02012"
                    />
				</Center>
			</Container>
		  </Center>
		</ScrollView>
	  );
};
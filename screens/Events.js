import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button, ImageButton } = require('../components/buttons')
const styles = require('../style/general');

// Assets
const logoImage = require('../assets/images/logo_food_hall.png')

// Output
module.exports = function Events({ navigation }) {

	// Button Handlers
	const handleOpenMap = () => {
		const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`
		Linking.openURL(url)
	}
	const handleCall = () => Linking.openURL(`tel:${contactInfo.phone}`)
	const handleWhatsApp = () => Linking.openURL(`https://wa.me/${contactInfo.whatsapp}`)
	const handleEmail = () => Linking.openURL(`mailto:${contactInfo.email}?subject=Contato%20Pátio`)

	return (
		<ScrollView>
		  <Center>
			{/* Logo */}
			<Image
			  style={styles.logo}
			  source={logoImage} 
			/>
	
			{/* Eventos */}
			<Container title={"Visite nos"}>
				<Text style={styles.contactText}>{contactInfo.address}</Text>
				<Center>
					<ImageButton
						source={localizationImage}
						onPress={handleOpenMap}
					/>
				</Center>
			</Container>
	
			{/* Redes Sociais */}
			<Container title={"Redes Sociais"}>
				<Button
					title="Facebook"
					onPress={() => Linking.openURL(contactInfo.facebook)}
					color="#3b5998"
				/>
				<Button
					title="Instagram"
					onPress={() => Linking.openURL(contactInfo.instagram)}
					color="#E1306C"
				/>
			</Container>
	
			{/* Contato */}
			<Container title={"Informações de contato"}>
				<Text style={[styles.contactText, {marginTop: 15}]}>{contactInfo.phone}</Text>
				<Button
					title="Ligar Agora"
					onPress={handleCall}
					color="#007bff"
				/>
		
				<Text style={[styles.contactText, {marginTop: 15}]}>WhatsApp</Text>
				<Button
					title="Enviar Mensagem"
					onPress={handleWhatsApp}
					color="#25D366"
				/>

				<Text style={[styles.contactText, {marginTop: 15}]}>Site Oficial</Text>
				<Button
					title="Visitar Website"
					onPress={() => Linking.openURL(contactInfo.website)}
					color="#6c757d"
				/>

				<Text style={[styles.contactText, {marginTop: 15}]}>E-mail</Text>
				<Button
					title="Enviar E-mail"
					onPress={handleEmail}
					color="#dc3545"
				/>
			</Container>
		  </Center>
		</ScrollView>
	  );
};
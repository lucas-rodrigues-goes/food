import * as React from 'react';

// Components
const { View, Text, Image, ScrollView, Linking, TouchableOpacity, Touchable } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button, ImageButton, IconButton } = require('../components/buttons')
const styles = require('../style/general');

// Assets
const contactInfo = require('../assets/data/food_hall_contact_info.json')
const logoImage = require('../assets/images/logo_food_hall.png')
const localizationImage = require('../assets/images/patio_food_hall.jpg')

// Output
module.exports = function Home({ navigation }) {

	// Button Handlers
	const handleOpenMap = () => {
		const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`
		Linking.openURL(url)
	}
	const handleCall = () => Linking.openURL(`tel:${contactInfo.phone}`)

	return (
		<ScrollView>
		  <Center>
			{/* Logo */}
			<Image
			  style={styles.logo}
			  source={logoImage} 
			/>
	
			{/* Localização */}
			<Container title={"Visite nos"}>
				{/* Texto indentado */}
				<View style={{paddingLeft: 10}}>
					<Text style={styles.contactText}>
						<Text style={{fontWeight: "bold", display: "inline"}}>
							Endereço: 
						</Text> {contactInfo.address}
					</Text>
				</View>
				<Center>
					<ImageButton
						source={localizationImage}
						onPress={handleOpenMap}
					/>
				</Center>
			</Container>
	
			{/* Contato */}
			<Container title={"Informações de contato"}>

				{/* Texto indentado*/}
				<View style={{paddingLeft: 10}}>
					{/* Telefone */}
					<Text style={styles.contactText}>
						<Text style={{fontWeight: "bold", display: "inline"}}>
							Telefone: 
						</Text> {contactInfo.phone}
					</Text>

					{/* Site */}
					<Text style={[styles.contactText, {marginBottom: 20}]}>
						<Text style={{fontWeight: "bold"}}>
							Site: 
						</Text> 
						<TouchableOpacity style={{display: "inline", color: "#37c"}} onPress={() => Linking.openURL(contactInfo.website)}>
							<Text> {contactInfo.website}</Text>
						</TouchableOpacity>
					</Text>
				</View>

				{/* Redes Sociais */}
				<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
					<IconButton
						source={require('../assets/images/call_icon.png')}
						onPress={handleCall}
					/>
					<IconButton
						source={require('../assets/images/whatsapp_logo.png')}
						onPress={() => Linking.openURL(`https://wa.me/${contactInfo.whatsapp}`)}
					/>
					<IconButton
						source={require('../assets/images/facebook_logo.png')}
						onPress={() => Linking.openURL(restaurant.facebook)}
					/>
					<IconButton
						source={require('../assets/images/email_logo.png')}
						onPress={() => Linking.openURL(`mailto:${contactInfo.email}?subject=Contato%20Pátio`)}
					/>
				</View>
			</Container>
		  </Center>
		</ScrollView>
	  );
};
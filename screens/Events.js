import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking, Platform } = require('react-native');
const { Video } = require('react-native-video');
const { Center, Container } = require('../components/structure');
const { Button } = require('../components/buttons')
const styles = require('../style/general');

// Assets
const events_info = require('../assets/data/events_info.json')

// Output
module.exports = function Events({ navigation }) {
	// Criar lista de eventos
	const eventElements = []
	for (const evento of events_info) {
		// Video source
		const video = require("../assets/videos/artist_1_video.mp4")

		// Add element to list
		eventElements.push(
			<Container title={evento.name}>
				<Text style={styles.contactText}>{evento.date}</Text>
				<Text style={styles.contactText}>{evento.description}</Text>
				<Center>
				{Platform.OS === 'web'
					? (<video src={video} controls style={styles.video} />) 
					: (<Video source={video} paused={false} style={styles.video} repeat={false} onError={(e) => console.log(e)} /> )}
				</Center>
			</Container>
		)
	}

	return (
		<ScrollView>
		  <Center>

			{/* Lista de Eventos */}
			{eventElements}

		  </Center>
		</ScrollView>
	  );
};
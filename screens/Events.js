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
	const eventElements = [];
	for (const evento of events_info) {
		eventElements.push(
			<Container key={evento.name} title={evento.name + " - " + evento.date}>
				<Text style={styles.contactText}>{evento.description}</Text>
				<Center>
					{Platform.OS === 'web' ? (
						<video src={evento.video} controls style={styles.video} />
					) : (
						<Video 
							source={evento.video} 
							paused={false} 
							style={styles.video} 
							repeat={false} 
							onError={(e) => console.log(e)} 
						/>
					)}
				</Center>
			</Container>
		);
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
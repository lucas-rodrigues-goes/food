import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking, Platform } = require('react-native');
const { Video } = require('react-native-video');
const { Center, Container } = require('../components/structure');
const { Button } = require('../components/buttons')
const styles = require('../style/general');

// Assets
const artist1Video = require('../assets/videos/artist_1_video.mp4')


// Output
module.exports = function Events({ navigation }) {

	// Button Handlers

	return (
		<ScrollView>
		  <Center>

			{/* Eventos */}
			<Container title={"Artista 1"}>
				<Text style={styles.contactText}>Dia 26/03 as 20h</Text>
				<Center>
				{Platform.OS === 'web' 
					? (<video src={artist1Video} controls style={styles.video} />) 
					: (<Video source={artist1Video} paused={false} style={styles.video} repeat={false} onError={(e) => console.log(e)} /> )}
				</Center>
			</Container>

		  </Center>
		</ScrollView>
	  );
};
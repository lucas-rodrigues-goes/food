import * as React from 'react';
import { Text, Image, ScrollView, Linking, Platform, View } from 'react-native';
import Video from 'react-native-video';
import { Center, Container } from '../components/structure';
import { Button } from '../components/buttons';
import styles from '../style/general';

const events_info = require('../assets/data/events_info.json');

export default function Events({ navigation }) {
  const eventElements = events_info.map((evento) => (
    <Container key={evento.name} title={`${evento.name} - ${evento.date}`}>
      <Text style={styles.contactText}>{evento.description}</Text>
      <Center>
        {Platform.OS === 'web' ? (
          <video 
            src={evento.video} 
            controls 
            style={styles.video} 
          />
        ) : (
          <View style={styles.videoContainer}>
            <Video
              source={{ uri: evento.video }}
              style={styles.video}
              controls
              paused={false}
              repeat={false}
              resizeMode="contain"
              onError={(error) => console.log('Video Error:', error)}
            />
          </View>
        )}
      </Center>
    </Container>
  ));

  return (
    <ScrollView>
      <Center>
        {eventElements}
      </Center>
    </ScrollView>
  );
};
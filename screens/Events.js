const React = require('react');
const { Text, ScrollView, Platform, View } = require('react-native');
const { Center, Container } = require('../components/structure');
const styles = require('../style/general');
const events_info = require('../assets/data/events_info.json');

// Use expo-av for all platforms (mobile + web)
const { Video } = require('expo-av');

function Events({ navigation }) {
  const eventElements = events_info.map((evento) => (
    <Container key={evento.name} title={`${evento.name} - ${evento.date}`}>
      <Text style={styles.contactText}>{evento.description}</Text>
      <Center>
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: evento.video }}
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            isLooping={false}
            onError={(e) => console.log('Video Error:', e)}
          />
        </View>
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
}

module.exports = Events;
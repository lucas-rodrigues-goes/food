import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking, View } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button, IconButton } = require('../components/buttons')
const styles = require('../style/general');

// Assets
const menuImage = require('../assets/images/menu_sample_img.png')

// Output
module.exports = function MenuItem({ route }) {
    const item = route.params;

    return (
        <ScrollView>
          <Center>
            {/* Informações do item */}
            <Container title={item.name}>
                <Center>
                    <Image 
                        style={styles.image}
                        source={menuImage}
                    />
                </Center>
                <Text style={styles.contactText}>{item.description}</Text>
                <Text style={styles.contactText}>{item.quantity}</Text>
                <Text style={styles.contactText}>{item.ingredients}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </Container>
          </Center>
        </ScrollView>
      );
};
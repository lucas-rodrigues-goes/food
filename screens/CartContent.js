import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking, TouchableOpacity } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button, ImageButton } = require('../components/buttons')
const styles = require('../style/general');

// Assets
const restaurantsInfo = require('../assets/data/restaurants_info.json')

// Output
module.exports = function Restaurants({ navigation }) {
    // Create Restaurant List
    const restaurantElements = []
    for (const restaurant of restaurantsInfo) {
        // Handle element navigation
        const navigate = () => navigation.navigate('Informações do Restaurante', restaurant)

        // Add element to list
        restaurantElements.push(
            <TouchableOpacity style={{width: '100%'}} onPress={navigate} key={restaurant.name}>
                <Container title={restaurant.name}>
                    {/* <Center>
                        <Image
                            source={restaurant.image}
                        />
                    </Center> */}
                </Container>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView>
          <Center>
    
            {/* Lista de restaurantes */}
            {restaurantElements}

          </Center>
        </ScrollView>
      );
};
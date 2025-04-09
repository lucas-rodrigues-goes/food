import * as React from 'react';

// Components
const { Text, Image, ScrollView, Linking, View, TouchableOpacity, Dimensions } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button, IconButton } = require('../components/buttons')
const { Card } = require('@rneui/themed');
const styles = require('../style/general');

// Assets
const whatsappIcon = require('../assets/images/whatsapp_logo.png')
const facebookIcon = require('../assets/images/facebook_logo.png')
const instagramIcon = require('../assets/images/instagram_logo.png')
const emailIcon = require('../assets/images/email_logo.png')
const ifoodIcon = require('../assets/images/ifood_logo.png')
const restaurantImage = require('../assets/images/boteco_sample_img.jpg')
const menuImage = require('../assets/images/menu_sample_img.png')

// Item Card
const ItemCard = function ({menuItem, navigate}) {
    return (
        <TouchableOpacity onPress={navigate}>
            <Card containerStyle={{ width: 140, margin: 5, borderRadius: 10, alignItems:'center'}}>
                <Card.Title style={{
                    textAlign: 'center', 
                    color: '#444', 
                    fontSize: 11,
                }}>{menuItem.name} </Card.Title>
                <Image
                        style={styles.foodIcon}
                        source={menuImage}
                    />
                <Text style={{
                    fontSize: 12,
                    marginTop: 10,
                    textAlign: 'center',
                    color: '#444',
                    fontWeight: 'bold',
                }}>R${menuItem.price.toFixed(2).replace(".", ",")}</Text>
            </Card>
        </TouchableOpacity>
    )
}

// Output
module.exports = function RestaurantInfo({ route, navigation }) {
    const restaurant = route.params;

    // Create Menu List
	const menuElements = []
	for (const menuItem of restaurant.menu) {
		// Handle element navigation
		const navigate = () => navigation.navigate('Item do Cardápio', [menuItem, restaurant])

		// Add element to list
		menuElements.push(
            <ItemCard key={menuItem.name} menuItem={menuItem} navigate={navigate}/>
        )
	}


	return (
		<ScrollView>
		  <Center>
			{/* Apresentação */}
            <Container title={restaurant.name}>
                {/* Texto indentado */}
                <View style={{paddingLeft: 10}}>
                    <Text style={styles.contactText}>
                        {restaurant.description}
                    </Text>
                </View>
                <Center>
                    <Image 
                        style={styles.image}
                        source={restaurantImage}
                    />
                </Center>
            </Container>

            {/* Cardapio */}
            <Container title={"Cardápio"}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingVertical: 10 }}
                >
                    {menuElements}
                </ScrollView>
            </Container>

            {/* Contato */}
			<Container title={"Informações de contato"}>
                {/* Texto indentado*/}
                <View style={{paddingLeft: 10}}>
                    {/* Telefone */}
                    <Text style={styles.contactText}>
                        <Text style={{fontWeight: "bold", display: "inline"}}>
                            Telefone: 
                        </Text> {restaurant.phone}
                    </Text>
                </View>

                {/* Redes Sociais */}
				<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
					<IconButton
						source={require('../assets/images/call_icon.png')}
						onPress={() => Linking.openURL(`tel:${restaurant.phone}`)}
					/>
                    <IconButton
						source={require('../assets/images/email_logo.png')}
						onPress={() => Linking.openURL(`mailto:${restaurant.email}?subject=Contato%20Pátio`)}
					/>
					<IconButton
						source={require('../assets/images/whatsapp_logo.png')}
						onPress={() => Linking.openURL(`https://wa.me/${restaurant.whatsapp}`)}
					/>
					<IconButton
						source={require('../assets/images/facebook_logo.png')}
						onPress={() => Linking.openURL(restaurant.facebook)}
					/>
                    <IconButton
                        source={instagramIcon}
                        onPress={() => Linking.openURL(restaurant.instagram)}
                    />
                    <IconButton
                        source={ifoodIcon}
                        onPress={() => Linking.openURL(`mailto:${restaurant.email}?subject=Contato%20Pátio`)}
                    />
				</View>
            </Container>

		  </Center>
		</ScrollView>
	  );
};
import * as React from 'react';

const { Text, Image, ScrollView, View } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button } = require('../components/buttons');
const ShoppingCart = require('../modules/Cart');
const styles = require('../style/general');

// Assets
const menuImage = require('../assets/images/menu_sample_img.png');

// Component
function MenuItem({ route }) {
  	const item = route.params;

	const formatPrice = new Intl.NumberFormat('pt-BR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(item.price);

	return (
		<ScrollView>
			<Center>
				<Container title={item.name}>
				<Center>
					<Image style={styles.image} source={menuImage} />
				</Center>
				<Text style={styles.contactText}>{item.description}</Text>
				<Text style={styles.contactText}>Quantidade: {item.quantity}</Text>
				<Text style={styles.contactText}>Ingredientes: {item.ingredients.join(', ')}</Text>
				<Text style={styles.price}>Preço: R${formatPrice}</Text>
				<Button
					title="Adicionar ao carrinho"
					color="#2ee860"
					onPress={() => ShoppingCart.addItem(item)}
				/>
				</Container>
			</Center>
		</ScrollView>
	);
}

module.exports = MenuItem;
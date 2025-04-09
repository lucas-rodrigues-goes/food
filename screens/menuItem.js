import * as React from 'react';

const { Text, Image, ScrollView, View } = require('react-native');
const { Center, Container } = require('../components/structure');
const { Button } = require('../components/buttons');
const ShoppingCart = require('../modules/Cart');
const styles = require('../style/general');

// Assets
const menuImage = require('../assets/images/menu_sample_img.png');

// Component
function MenuItem({ route, navigation }) {
  	const [item, restaurant] = route.params;

	// Ajusta o formato do preço
	const formatPrice = new Intl.NumberFormat('pt-BR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(item.price);

	return (
		<ScrollView>
			<Center>
				<Container title={item.name}>
					<Center>
						<Image style={{height: 150, width: 150}} source={menuImage} />
					</Center>
					<Text style={styles.contactText}>
						<Text style={{fontWeight: "bold", display: "inline"}}>
							Descrição: 
						</Text> {item.description}
					</Text>
					<Text style={styles.contactText}>
						<Text style={{fontWeight: "bold", display: "inline"}}>
							Ingredientes: 
						</Text> {item.ingredients.join(", ")}
					</Text>
					<Text style={styles.contactText}>
						<Text style={{fontWeight: "bold", display: "inline"}}>
							Quantidade: 
						</Text> {item.quantity}
					</Text>
					<Text style={styles.contactText}>
						<Text style={{fontWeight: "bold", display: "inline"}}>
							Preço: 
						</Text> R${item.price.toFixed(2).replace(".", ",")}
					</Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
						<Button
							style={{width: '48%'}}
							title="Adicionar ao carrinho"
							color="#46c"
							onPress={() => {
								ShoppingCart.addItem(item)
								if (restaurant) navigation.navigate('Informações do Restaurante', restaurant)
								else navigation.navigate('Carrinho de Compras')
							}}
						/>
						<Button
							style={{width: '48%'}}
							title="Voltar"
							color="#46c"
							onPress={() => {
								if (restaurant) navigation.navigate('Informações do Restaurante', restaurant)
								else navigation.navigate('Carrinho de Compras')
							}}
						/>
					</View>
				</Container>
			</Center>
		</ScrollView>
	);
}

module.exports = MenuItem;
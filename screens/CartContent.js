import * as React from 'react';

// Async
const { useState, useEffect } = React;
const { getItems, removeItem, buyItems } = require('../modules/Cart');

// Components
const { Container, Center } = require('../components/structure')
const { Button } = require('../components/buttons');
const { View, Text, StyleSheet, TouchableOpacity } = require('react-native');
const styles = require('../style/general');

// CartItem Component
const CartItem = ({item, index, navigation}) => {

	// Navigation to item page
	const navigate = () => navigation.navigate('Item do Cardápio', [item, undefined])

	// Output
	return (
		<TouchableOpacity onPress={navigate} key={index}>
			<Container style={styles.cartContainer}>
				<View style={styles.info}>
					<Text style={styles.name}>{item.name}</Text>
					<Text style={styles.description}>{item.description}</Text>
					<Text style={styles.quantity}>Quantidade: {item.quantity}</Text>
					<Text style={styles.cartPrice}>R${item.price.toFixed(2).replace(".", ",")}</Text>
				</View>
				<TouchableOpacity
					style={styles.remove}
					onPress={() => removeItem(index, item.name)}
				>
					<Ionicons name="trash-outline" size={20} color="#04048a" />
				</TouchableOpacity>
			</Container>
		</TouchableOpacity>
	)
}

// External
const { Ionicons } = require('@expo/vector-icons');

const CartScreen = ({ navigation }) => {
	// Dynamic variables
	const [total, setTotal] = useState(0);
	const [CartItems, setCartItems] = useState([]);

	// Updates the page
	const updatePage = async () => {
		// Gets current items
		const items = await getItems();
		
		// Sums total price
		let total = 0;
		for (const item of items) total += item.price
		setTotal(total);

		// Creates cart items list
		const tempCartItems = [];
		for (let index = 0; index < items.length; index++) {
			const item = items[index];
			tempCartItems.push(CartItem({item, index, navigation}));
		}
		setCartItems(tempCartItems);
	};

	// Calls page update on window load
	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', updatePage);
		return unsubscribe;
	}, [navigation]);

	// Output
	return (
		<Container style={{flex: 1, backgroundColor: "rgba(0,0,0,0)"}}>
			{CartItems.length === 0 
				? // If cart is empty
					<>
					<Center style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						<Ionicons name="cart-outline" size={50} color="#ccc" />
						<Text style={{fontSize: 18, color: '#999', marginTop: 10}}>Seu carrinho está vazio</Text>
					</Center>
					</>
				: // Else
					<>
					{/* Item List */}
					<View style={{ flex: 1 }}>
						<View style={{flex: 1, padding: 15, paddingTop: 0}}>
							{CartItems}
						</View>
					</View>
					{/* Summary */}
					<View style={{borderTopWidth: 1, borderTopColor: '#eee', padding: 20, backgroundColor: '#fff'}}>
						<Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'right', marginRight: 10, marginBottom: 15}}>
							Total: R${total.toFixed(2).replace(".", ",")}
						</Text>
						<Button
							title="Finalizar Compra"
							color="#46c"
							onPress={async () => {await buyItems(); updatePage();}}
						/>
					</View>
					</>
			}
		</Container>
	);
};

module.exports = CartScreen;
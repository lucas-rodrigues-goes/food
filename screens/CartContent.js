import * as React from 'react';

// Async
const { useState, useEffect } = React;
const { getItems, removeItem, buyItems } = require('../modules/Cart');

// Components
const { Container, Center } = require('../components/structure')
const { Button } = require('../components/buttons');
const { View, Text, StyleSheet, TouchableOpacity } = require('react-native');

// External
const { Ionicons } = require('@expo/vector-icons');

const CartScreen = ({ navigation }) => {
	// Dynamic variables
	const [total, setTotal] = useState(0);
	const [cartItems, setCartItems] = useState([]);

	// Create cart item element
	const cartItem = ({item, index}) => {
		// Style
		const style = StyleSheet.create({
			container: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				backgroundColor: '#fff',
				borderRadius: 8,
				padding: 15,
				marginBottom: 10,
				elevation: 2,
			},
			info: {
				flex: 1,
			},
			name: {
				fontSize: 16,
				fontWeight: 'bold',
				marginBottom: 5,
				color: '#333',
			},
			description: {
				fontSize: 14,
				color: '#666',
				marginBottom: 5,
			},
			quantity: {
				fontSize: 12,
				color: '#888',
				marginBottom: 5,
			},
			price: {
				fontSize: 16,
				fontWeight: 'bold',
				color: '#e53935',
			},
			remove: {
				padding: 5,
				alignSelf: 'flex-start',
			},
		})

		// Output
		return (
			<Container style={style.container} key={index}>
				<View style={style.info}>
					<Text style={style.name}>{item.name}</Text>
					<Text style={style.description}>{item.description}</Text>
					<Text style={style.quantity}>Quantidade: {item.quantity}</Text>
					<Text style={style.price}>R$ {item.price.toFixed(2)}</Text>
				</View>
				<TouchableOpacity
					style={style.remove}
					onPress={() => removeItem(index, item.name)}
				>
					<Ionicons name="trash-outline" size={20} color="#e53935" />
				</TouchableOpacity>
			</Container>
		)
	}

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
			tempCartItems.push(cartItem({item, index}));
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
			{cartItems.length === 0 
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
						<View style={{flex: 1, padding: 15}}>
							{cartItems}
						</View>
					</View>
					{/* Summary */}
					<View style={{borderTopWidth: 1, borderTopColor: '#eee', padding: 20, backgroundColor: '#fff'}}>
						<Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'right', marginBottom: 15}}>
							Total: R$ {total.toFixed(2)}
						</Text>
						<Button
							title="Finalizar Compra"
							onPress={async () => {await buyItems(); updatePage();}}
						/>
					</View>
					</>
			}
		</Container>
	);
};

module.exports = CartScreen;
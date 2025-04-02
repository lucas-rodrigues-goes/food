import * as React from 'react';

const AsyncStorage = require('@react-native-async-storage/async-storage').default;

async function save(cart) {
	try {
		await AsyncStorage.setItem('@cart', JSON.stringify(cart));
	} catch (e) {
		console.error("Failed to save cart:", e);
	}
}

async function getItems() {
	try {
		const cart = await AsyncStorage.getItem('@cart');
		return cart ? JSON.parse(cart) : [];
	} catch (e) {
		console.error("Failed to load cart:", e);
		return [];
	}
}

async function addItem(item) {
	const cart = await getItems();
	const updatedCart = [...cart, item];
	await save(updatedCart);
	alert(`Item adicionado ao carrinho!`);
}

module.exports = { save, getItems, addItem }
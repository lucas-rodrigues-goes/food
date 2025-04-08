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

async function removeItem(i, item_name) {
	const cart = await getItems();
	cart.splice(i, 1)
	await save(cart)

	alert(item_name + " removed.")
}

async function addItem(item) {
	const cart = await getItems();
	const updatedCart = [...cart, item];
	await save(updatedCart);
	alert(`Item adicionado ao carrinho!`);
}

async function clearItems() {
	await save([])
}

async function buyItems() {
	await clearItems()
	alert(`Compra finalizada com sucesso!`);
}

module.exports = { getItems, addItem, removeItem, clearItems, buyItems }
import * as React from 'react';
const AsyncStorage = require('@react-native-async-storage/async-storage').default;

// Helper function to generate a simple hash from item properties
function generateItemHash(item) {
  return `${item.name}-${item.price}-${JSON.stringify(item.ingredients)}`;
}

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
    return cart ? JSON.parse(cart) : {};
  } catch (e) {
    console.error("Failed to load cart:", e);
    return {};
  }
}

async function removeItem(itemHash, item_name) {
  const cart = await getItems();
  if (cart[itemHash]) {
    if (cart[itemHash].quantity > 1) {
      // Decrement quantity if more than one
      cart[itemHash].quantity -= 1;
      //alert(`1 ${item_name} removido (Restantes: ${cart[itemHash].quantity})`);
    } else {
      // Remove completely if last item
      delete cart[itemHash];
      //alert(`${item_name} removido do carrinho`);
    }
    await save(cart);
  }
}

async function addItem(item) {
  const cart = await getItems();
  const itemHash = generateItemHash(item);
  
  if (cart[itemHash]) {
    cart[itemHash].quantity += 1;
  } else {
    cart[itemHash] = {
      item: item,
      quantity: 1
    };
  }
  
  await save(cart);
  //alert(`Item adicionado ao carrinho! (Total: ${cart[itemHash].quantity})`);
}

async function clearItems() {
  await save({});
}

async function buyItems() {
  await clearItems();
  alert(`Compra finalizada com sucesso!`);
}

// Helper function to get cart as array with quantities
async function getCartArray() {
  const cartObj = await getItems();
  return Object.values(cartObj).map(entry => ({
    ...entry.item,
    quantity: entry.quantity
  }));
}

module.exports = { 
  getItems, 
  addItem, 
  removeItem, 
  clearItems, 
  buyItems,
  getCartArray
};
// screens/CartScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getItems, removeItem, buyItems } from '../modules/Cart';
import styles from '../style/general';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const loadCart = async () => {
    try {
      const items = await getItems();
      setCartItems(items);
      
      // Calculate total
      let total = 0
      for (const item of items) { total += item.price}

      setTotal(total);
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  useEffect(() => {
    // Load cart when screen focuses
    const unsubscribe = navigation.addListener('focus', loadCart);
    return unsubscribe;
  }, [navigation]);

  const handleRemoveItem = async (itemId) => {
    try {
      await removeItem(itemId);
      loadCart(); // Refresh the cart after removal
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={cartStyles.itemContainer}>
      <View style={cartStyles.itemInfo}>
        <Text style={cartStyles.itemName}>{item.name}</Text>
        <Text style={cartStyles.itemDescription}>{item.description}</Text>
        <Text style={cartStyles.itemQuantity}>Quantidade: {item.quantity}</Text>
        <Text style={cartStyles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity 
        style={cartStyles.removeButton}
        onPress={() => handleRemoveItem(item.name)}
      >
        <Ionicons name="trash-outline" size={20} color="#e53935" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={cartStyles.container}>
      {cartItems.length === 0 ? (
        <View style={cartStyles.emptyCart}>
          <Ionicons name="cart-outline" size={50} color="#ccc" />
          <Text style={cartStyles.emptyText}>Seu carrinho está vazio</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            // key={item.name}
            contentContainerStyle={cartStyles.list}
          />
          <View style={cartStyles.summary}>
            <Text style={cartStyles.totalText}>Total: R$ {total.toFixed(2)}</Text>
            <TouchableOpacity 
              style={[styles.button, cartStyles.checkoutButton]}
              onPress={async () => {
                await buyItems()
                loadCart()
              }}
            >
              <Text style={styles.buttonText}>Finalizar Compra</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const cartStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e53935',
  },
  removeButton: {
    padding: 5,
    alignSelf: 'flex-start',
  },
  summary: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 20,
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 15,
  },
  checkoutButton: {
    backgroundColor: '#e53935',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginTop: 10,
  },
});

export default CartScreen;
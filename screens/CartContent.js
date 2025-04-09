import * as React from 'react';
const { useState, useEffect } = React;
const { getItems, removeItem, buyItems, getCartArray, addItem } = require('../modules/Cart');

// Components
const { Container, Center } = require('../components/structure')
const { Button } = require('../components/buttons');
const { View, Text, ScrollView, TouchableOpacity } = require('react-native');
const styles = require('../style/general');

// External
const { Ionicons } = require('@expo/vector-icons');

const CartScreen = ({ navigation }) => {
    const [total, setTotal] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const updatePage = async () => {
        const itemsArray = await getCartArray();
        
        let calculatedTotal = 0;
        itemsArray.forEach(item => {
            calculatedTotal += item.price * item.quantity;
        });
        setTotal(calculatedTotal);

        const tempCartItems = [];
        Object.entries(await getItems()).forEach(([hash, { item, quantity }], index) => {
            tempCartItems.push(
                <CartItem 
                    key={hash}
                    item={{ ...item, quantity }} 
                    hash={hash} 
                    index={index} 
                />
            );
        });
        setCartItems(tempCartItems);
    };

    const CartItem = ({ item, hash, index }) => {
        const navigate = () => navigation.navigate('Item do Cardápio', [item, undefined]);

        const handleIncrease = async () => {
            await addItem(item);
            updatePage();
        };

        const handleDecrease = async () => {
            await removeItem(hash, item.name);
            updatePage();
        };

        return (
			<Container style={styles.cartContainer}>
					<View style={styles.info}>
						<TouchableOpacity onPress={navigate}>
							<Text style={styles.name}>{item.name}</Text>
							<Text style={styles.description}>{item.ingredients.join(", ")}</Text>
							<Text style={styles.cartPrice}>
								R${(item.price * item.quantity).toFixed(2).replace(".", ",")}
							</Text>
						</TouchableOpacity>
					</View>
				<View style={styles.verticalQuantityControls}>
					<TouchableOpacity 
						onPress={handleIncrease}
						style={styles.arrowButton}
					>
						<Ionicons name="chevron-up" size={24} color="#46c" />
					</TouchableOpacity>
					<Text style={styles.quantityText}>{item.quantity}</Text>
					<TouchableOpacity 
						onPress={handleDecrease}
						style={styles.arrowButton}
					>
						<Ionicons name="chevron-down" size={24} color="#46c" />
					</TouchableOpacity>
				</View>
			</Container>
        );
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', updatePage);
        return unsubscribe;
    }, [navigation]);

    return (
        <Container style={{flex: 1, backgroundColor: "rgba(0,0,0,0)"}}>
            {cartItems.length === 0 ? (
                <Center style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name="cart-outline" size={50} color="#ccc" />
                    <Text style={{fontSize: 18, color: '#999', marginTop: 10}}>
                        Seu carrinho está vazio
                    </Text>
                </Center>
            ) : (
                <>
                    <ScrollView style={{height: '85%'}}>
                        <View style={{ flex: 1 }}>
                            <View style={{flex: 1, padding: 15, paddingTop: 0}}>
                                {cartItems}
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.checkoutContainer}>
                        <Text style={styles.totalText}>
                            Total: <Text style={{color: '#46c'}}>
                                R${total.toFixed(2).replace(".", ",")}
                            </Text>
                        </Text>
                        <Button
                            title="Finalizar Compra"
                            color="#46c"
                            onPress={async () => {
                                await buyItems(); 
                                navigation.navigate('Inicio')
                            }}
                        />
                    </View>
                </>
            )}
        </Container>
    );
};

module.exports = CartScreen;
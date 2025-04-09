import * as React from 'react';
const { StyleSheet } = require('react-native');

// Output
module.exports = StyleSheet.create({
  logo: {
    height: 160,
    width: 160,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  contactText: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
  },
  video: {
    height: 160,
    width: 280,
  },
  image: {
    height: 160,
    width: 320,
  },
  icon: {
    width: 30,
    height: 30,
  },
  foodIcon: {
    width: 50,
    height: 50,
    margin: 0,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cartContainer: {
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
  cartPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#46c',
  },
  remove: {
    padding: 5,
    alignSelf: 'flex-start',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
},
quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#46c',
    marginHorizontal: 8,
},
verticalQuantityControls: {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
},
quantityText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#46c',
  marginVertical: 4,
},
arrowButton: {
  padding: 4,
},
checkoutContainer: {
  height: '20%',
  position: 'sticky', 
  bottom: 0, 
  margin: 0,
  borderTopWidth: 1, 
  borderTopColor: '#eee', 
  padding: 20, 
  backgroundColor: '#fff'
},
totalText: {
  fontSize: 18, 
  fontWeight: 'bold', 
  textAlign: 'right', 
  marginRight: 10, 
  marginBottom: 15
}
});
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
  price: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
    fontWeight: 'bold',
  },
  video: {
    height: 160,
    width: 280,
  },
  image: {
    height: 160,
    width: 320,
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  foodIcon: {
    width: 70,
    height: 70,
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
});
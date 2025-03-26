import * as React from 'react';

// Component
const { StyleSheet } = require('react-native');

// Output
module.exports = StyleSheet.create({
  container: {
    alignItems: 'center',
    placeItems: 'center',
    padding: 20,
    textAlign: 'center',
  },
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
  button: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  photo: {
    width: 300,
    height: 200,
    borderRadius: 10,
    margin: 5,
  },
  contactInfo: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  contactText: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
  },
  socialButton: {
    padding: 12,
    marginVertical: 5,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  }
});
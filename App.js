import * as React from 'react';

// Screens
const Home = require('./screens/Home');

// Components
const { Navigator, Screen } = require('@react-navigation/drawer').createDrawerNavigator()
const { NavigationContainer } = require('@react-navigation/native')

// Output
export default function App() {
  return (
	<NavigationContainer>
    	<Navigator initialRouteName="Inicio">
    		<Screen name="Inicio" component={Home}/>
    	</Navigator>
    </NavigationContainer>
  );
}
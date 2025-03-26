import * as React from 'react';

// Screens
const Home = require('./screens/Home');

// Components
const { NavigationContainer } = require('@react-navigation/native')
const { Navigator, Screen } = require('@react-navigation/native-stack').createNativeStackNavigator()

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
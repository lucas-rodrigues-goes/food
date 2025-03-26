import * as React from 'react';

// Screens
const Home = require('./screens/Home');
const Events = require('./screens/Events');
const Restaurants = require('./screens/Restaurants');

// Components
const { Navigator, Screen } = require('@react-navigation/drawer').createDrawerNavigator()
const { NavigationContainer } = require('@react-navigation/native')

// Output
export default function App() {
  return (
	<NavigationContainer>
    	<Navigator initialRouteName="Inicio">
    		<Screen name="Inicio" component={Home}/>
			<Screen name='Eventos' component={Events} />
			<Screen name='Restaurantes' component={Restaurants} />
    	</Navigator>
    </NavigationContainer>
  );
}
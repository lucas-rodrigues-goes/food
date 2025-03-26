import * as React from 'react';

// Screens
const Home = require('./screens/Home');
const Events = require('./screens/Events');
const Restaurants = require('./screens/Restaurants');
const RestaurantInfo = require('./screens/RestaurantInfo');

// Components
const { Navigator, Screen } = require('@react-navigation/drawer').createDrawerNavigator()
const { NavigationContainer } = require('@react-navigation/native')

// Options
const hidden = {drawerItemStyle: {display: 'none'}}

// Output
export default function App() {
  return (
	<NavigationContainer>
    	<Navigator initialRouteName="Inicio">
    		<Screen name="Inicio" component={Home}/>
			<Screen name='Eventos' component={Events}/>
			<Screen name='Restaurantes' component={Restaurants}/>
			<Screen name='R2' component={RestaurantInfo} options={hidden}/>
    	</Navigator>
    </NavigationContainer>
  );
}
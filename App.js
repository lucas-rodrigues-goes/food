import * as React from 'react';

// Screens
const Home = require('./screens/Home');
const Events = require('./screens/Events');
const Restaurants = require('./screens/Restaurants');
const RestaurantInfo = require('./screens/RestaurantInfo');
const MenuItem = require('./screens/menuItem');

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
			
			{/* Hidden screen */}
			<Screen name='Informações do Restaurante' component={RestaurantInfo} options={hidden}/>
			<Screen name='Item do Cardápio' component={MenuItem} options={hidden} />
    	</Navigator>
    </NavigationContainer>
  );
}
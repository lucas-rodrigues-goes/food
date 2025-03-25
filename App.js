import * as React from 'react';

// Screens
const Home = require('./screens/Home');

// Components
const { NavigationContainer } = require('@react-navigation/native')
const Stack = require('@react-navigation/native-stack').createNativeStackNavigator()

// Output
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
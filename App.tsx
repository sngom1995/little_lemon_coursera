/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet} from 'react-native';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
//import WelcomeScreen from './components/WelcomeScreen';
//import MenuItems from './components/MenuItems';
//import FeedbackForm from './components/FeedbackForm​';
import LoginScreen from './components/LittleLemonFooter/LoginScreen';
import MenuItems from './components/MenuItems';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './components/WelcomeScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <View style={styles.container}>
      <LittleLemonHeader/>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerStyle:{backgroundColor: '#FBDABB'}}}>
        <Stack.Screen name="Login" options={{title: 'Se connecter'}} component={LoginScreen}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Menu" component={MenuItems}/>
      </Stack.Navigator>
    </NavigationContainer>
    <View style={styles.footerContainer}>
      <LittleLemonFooter/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {flex: 0.04,

    justifyContent: 'flex-end',

    backgroundColor: '#333333' },
});

export default App;

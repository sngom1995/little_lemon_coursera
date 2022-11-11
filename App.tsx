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
//import MenuItems from './components/MenuItems';

const App = () => {
  return (
    <>
      <LittleLemonHeader/>
     <View style={styles.container}>
      {/* <FeedbackForm /> */}
      <LoginScreen/>
      {/* <MenuItems/> */}
     </View>
    <View style={styles.footerContainer}>
    <LittleLemonFooter/>
    </View>
    </>
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

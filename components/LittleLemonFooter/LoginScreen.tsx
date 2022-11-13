/* eslint-disable prettier/prettier */
import * as React from 'react';
import {ScrollView, Text, StyleSheet, TextInput, Alert, Pressable} from 'react-native';
//import Welcome from '../Welcome';

const  LoginScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showFom, setShowForm ] = React.useState(false);
  return (
    <ScrollView style={styles.container}>
     {
        !showFom &&  <>
        
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>Login to continue </Text>
        
        <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder={'email'}
              keyboardType={'email-address'}
              //onFocus={() => {Alert.alert('First name is focussed')}}
              onBlur={() => {Alert.alert(`First name is now blurred ${email}`)}}
        />
        <TextInput
              style={styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              placeholder={'password'}
              keyboardType={'default'}
              clearButtonMode={'always'}
        /></>
     }
     {
        showFom && <Text style={styles.regularText}> Log Out</Text>
     }
        <Pressable style={styles.button} onPress={() =>navigation.navigate('Menu')}>
           {/* {!showFom && <Text style={styles.buttonText}> Log in</Text>}
           {showFom && <Text style={styles.buttonText}> Log out</Text>} */}
           <Text style={styles.buttonText}> Log in</Text>
        </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input:  {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
},
button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 60,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 20,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
});

export default LoginScreen;
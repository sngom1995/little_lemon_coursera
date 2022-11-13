/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { ScrollView, Text, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={'white'} style={{ flex: 1 , backgroundColor:'#'}}>
         <Image 
        style={{
            height: 50,
            width: 300,
            resizeMode: 'contain',
            }}
         source={require('../img/LIttleLemonLogo.png')}
         accessible={true}
         accessibilityLabel={'Lottle Lemon Logo'}
         />
      <Text
        style={{
          padding: 40,
          fontSize: 50,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 38,
          padding: 20,
          marginVertical: 1,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}


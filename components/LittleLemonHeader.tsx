/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */


import React from 'react';
import {Image,  View} from 'react-native';

const LittleLemonHeader = () => {
  return (
    <View
        style={{flex: 0.10, backgroundColor: '#EE9972', justifyContent: 'center', paddingLeft:50}}
    >
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
    </View>
  );
};

export default LittleLemonHeader;

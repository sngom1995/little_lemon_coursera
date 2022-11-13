/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Text, View} from 'react-native';

const LittleLemonFooter = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex:1,
        backgroundColor: '#EE9972',
        justifyContent: 'center',
       // paddingBottom:20,
        //paddingLeft:20,
        
      }}>
      <Text style={{textAlign: 'center'}}>All rights reserved by Little Lemon, 2022 </Text>
      </View>
  );
};

export default LittleLemonFooter;

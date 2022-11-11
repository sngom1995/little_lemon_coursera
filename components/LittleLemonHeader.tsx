/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */


import {Text, View} from 'react-native';

const LittleLemonHeader = () => {
  return (
    <View
        style={{flex: 0.10, backgroundColor: '#EE9972', justifyContent: 'center'}}
    >
      <Text
        style={{paddingLeft:100, fontSize:30, color: 'black', justifyContent:'center'}} numberOfLines={2}
      >
       <Text
       style={{fontWeight:'bold'}}> Little Lemon</Text>
    </Text>
    </View>
  );
};

export default LittleLemonHeader;

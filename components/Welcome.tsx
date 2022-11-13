/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 300,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 14,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 0,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome;

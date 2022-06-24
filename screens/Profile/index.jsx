import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
     
      <Text style={styles.text_2}>I am rich</Text>
      <Text style={styles.text_2}>I deserve it</Text>
      <Text style={styles.text_2}>I am good, healthy & successful</Text>
  
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  
  },

  text_2: {
    fontWeight:'bold',
    fontSize:70,
    alignItems:'center',
    justifyContent:'center',

  }


});
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import styles from './Styles';

export default function HomeSceen({ navigation }) {
  return (

    <View style={styles.container}>

        <Text style={styles.text}>Click Here!</Text>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.logo}
            source={require('../../assets/details.png')}
          />
        </Pressable>
    </View>
  );
}


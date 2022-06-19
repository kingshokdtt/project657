import React from "react";
import {StyleSheet} from 'react-native';


function GoalItem() {
    return (
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View> 
    );

};


export default GoalItem;

const styles =StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding:8,
        color:'white'
      },
      goalText:{
        color:'white',
      },
})
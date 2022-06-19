import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }


  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal ={addGoalHandler} />   
      <View style={styles.goalsContainer}>

        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) =>{
            return <GoalItem text={itemData.item.text}/>;

          }}
          keyExtractor={(item,index) => {
            return item.id;
          }} 
          alwaysBounceVertical={false}
        /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
  },
  
  goalsContainer:{
    flex:4,
  },


});

import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home/index.jsx';
import ProfileScreen from './screens/Profile/index.jsx';

import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const Stack = createNativeStackNavigator();

  function startAddGoalHandler () {
    setModalIsVisible(true);
  }
  function endAddGoalHandler () {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !==id);
    });
  }


  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color="gray" onPress={startAddGoalHandler}/>
        <GoalInput visible={modalIsVisible} onAddGoal ={addGoalHandler} onCancel={endAddGoalHandler}/>   
        <View style={styles.goalsContainer}>

          <FlatList 
            data={courseGoals} 
            renderItem={(itemData) => {
              return (
                <GoalItem 
                  text={itemData.item.text}
                  id={itemData.item.id} 
                  onDeleteItem={deleteGoalHandler}
                />
              );    
            }}
            keyExtractor={(item,index) => {
              return item.id;
            }} 
            alwaysBounceVertical={false}
          /> 
        </View>
      </View>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Want to be Rich!!!'}}
        />
        
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{title:'Done'}} 
        />     
        

      </Stack.Navigator>

    </NavigationContainer>
    </>
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

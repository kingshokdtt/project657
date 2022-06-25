import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button, Image, Text} from 'react-native';



import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  

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
      <View style={styles.appContainer2}>
        <Image style={styles.logo} source={require('../project657/assets/book.png')}/>
        <Text style={styles.logoName}>LIST n RUN</Text>
      </View>
      <View style={styles.appContainer}>
      
        <Button title='Add New List' color="gray" onPress={startAddGoalHandler}/>
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
      <Text style={styles.bottomName}>Click on list to DELETE</Text>
      
      
      
      
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    height:430,
    paddingTop:40,
    paddingHorizontal:16,
    backgroundColor:'#5f9ea0',
  },
  appContainer2:{
 
    paddingTop:30,
    paddingBottom:10,
    alignItems:'center',

    
  },
  logoName:{
    fontSize:30,
    fontWeight:'bold',
    color:'#8b008b',
    
  },
  
  goalsContainer:{
    flex:4,
  },
  logo:{
    width:160,
    height:150,
    padding:50,
    
  },
  bottomName:{
    fontSize:20,
    fontWeight:'bold',
    color:'#8b008b',
    paddingLeft:80,
    
  },


});

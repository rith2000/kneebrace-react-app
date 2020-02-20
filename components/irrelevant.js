//import 'react-native-gesture-handler';
//import * as React from 'react';
//import React, { useState } from 'react';
//import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

// export default function App() {
//   return(

//       <View>

//       {HomeScreen}
//       </View>

//     )
// }

// export default function App() {

//   const [enteredGoal, setEnteredGoal] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);
//   const goalInputHandler = (enteredText) => {
//     setEnteredGoal(enteredText);
//   };
//   const addGoalHandler = () => {
//     setCourseGoals(currentGoals => [...currentGoals, enteredGoal]) ;
//   };
//   return (
//   <View style = {styles.screen}>

// {/*course goals button*/}
//       <View 
//         style = {styles.inputContainer}>
//         <TextInput 
//           placeholder="Course Goal" 
//           style={styles.input}
//           onChangeText={goalInputHandler}
//           value={enteredGoal}/>
//         <Button 
//           title = "ADDD"
//           onPress={addGoalHandler}/>
//       </View>

//       <ScrollView>
//         {courseGoals.map(goal => 
//           <View key = {goal} style = {styles.listItem}>
//             <Text>{goal}</Text>
//           </View>)}
//       </ScrollView>


// {/*red block*/}
//     <View style = {{
//         padding: 50,
//         width: 400,
//         height: 200,
//         flexDirection: 'row-reverse',
//         justifyContent: 'space-between',
//         alignItems: 'stretch'}}> 
//       <View  
//         style = {{
//           backgroundColor: 'red',
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//         <Text>1</Text>
//       </View>
// {/*blue block*/}
//       <View 
//         style = {{
//           backgroundColor: 'blue',
//           flex: 2,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//         <Text>2</Text>
//       </View>
// {/*green block*/}
//       <View  
//         style = {{
//           backgroundColor: 'green',
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//         <Text>3</Text>
//       </View>
//     </View>
//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     padding: 50
//   },
//   inputContainer: {
//       flexDirection: 'row', 
//       justifyContent: 'space-between',
//       alignItems: 'center'
//   },
//   input: { 
//     borderBottomColor: 'black',
//     borderWidth: 1,
//     width: '80%',
//     height: '100%',
//     padding: 10
//   },
//   listItem: {
//     padding: 10,
//     backgroundColor: '#ccc',
//     borderColor: 'black',
//     borderWidth: 1,
//     marginVertical: 10
//   }
// });

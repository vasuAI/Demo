import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ParentScreen from './Parent';

const Tab = createBottomTabNavigator();
export default function BottomNavigator() {
    function HomeScreen() {
        return (
          <Text>Home</Text>
        );
      }
      function Settings({navigation}){
        return(
          <View>
            <Text>Settings</Text>
            <Image />
          </View>
        )
      }
  return (
<NavigationContainer>
          <Tab.Navigator>
        <Tab.Screen name="Home" component={ParentScreen} options={{tabBarBadge:3, tabBarIcon:()=>{
          return(
            <Image 
            style={{width:20, height:20}}
            source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}
            />
          )
        }} }/>
        <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon:()=>{
          return(
            <Image 
            style={{width:20, height:20}}
            source={{uri:'https://cdn-icons-png.flaticon.com/512/126/126472.png'}}
            />
          )
        }} } />
      </Tab.Navigator>
</NavigationContainer>
  )
}
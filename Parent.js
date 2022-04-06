import { View, Text, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


function ParentScreen({navigation}) {

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', justifyContent:"space-around"}}>
            <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
            <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
            <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        

        </View>
    );
  }
  export default ParentScreen
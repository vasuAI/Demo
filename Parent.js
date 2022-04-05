import { View, Text, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


function ParentScreen({navigation}) {

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Parent</Text>
            <Button
          title="ParentScreen"
          onPress={() => navigation.navigate('Home')}
        />
             <Text>Profile</Text>
            <Button
          title="ProfileScreen"
          onPress={() => navigation.navigate('Profile')}
        />
             <Text>Settings</Text>
            <Button
          title="SettingsScreen"
          onPress={() => navigation.navigate('Settings')}
        />
        

        </View>
    );
  }
  export default ParentScreen
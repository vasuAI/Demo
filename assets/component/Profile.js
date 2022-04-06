import { View, Text, Button } from 'react-native'
import React from 'react'
import TopTabNavigation from '../../TopTabNavigation';

function Profile({navigation}) {
    return (
      <View style={{}}>
        <TopTabNavigation navigation={navigation} />

      <Text>Profile</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Home" onPress={() => navigation.navigate('Parent')} />
      </View>
    );
  }


  export default Profile
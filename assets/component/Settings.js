import { View, Text, Button } from 'react-native'
import React from 'react'

function Settings({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>
        <Button title="Parent" onPress={() => navigation.push('Parent')} />
      </View>
    );
  }

  export default Settings
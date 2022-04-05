import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ParentScreen from './Parent';
import BottomNavigator from './BottomNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={{flex:1}}>
          <NavigationContainer>
      <Stack.Navigator initialRouteName="Parent">
      <Stack.Screen 
      name="Parent" 
      component={ParentScreen} 
      options={{title:'vasu', 
      headerTintColor:'white',
      headerTitleStyle:{fontSize:20},
      headerStyle:{backgroundColor:'orange',}
    }  
      } />

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Feeds" component={Feeds}/>
          <Stack.Screen name="Messages" component={Message} options={({route})=>({title:route.params.name})} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />

        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
      
    </NavigationContainer>

    
    {/* <BottomNavigator /> */}
    </View>
  );
};

function HomeScreen({route, navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Feedsss</Text>
      <Button
        title="Feed"
        onPress={() => {
          navigation.navigate('Feeds')
        }
        }
      />
      <Text>Message</Text>
      <Button
        title="Message"
        onPress={() => navigation.navigate('Messages',{name:'vasu', age:38})}
      />
    </View>
  );
}
function Feeds({navigation}) {
  return (
    <Text>Feed</Text>
  );
}

function Hello({navigation}) {
  return (
    <Text>Hello</Text>
  );
}

function Message({route,navigation}) {
  const {name, age} = route.params

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Message</Text>
     <Text> {name}  {age}</Text>
    </View>
  );
}

function Settings({navigation}){
  return(
    <View>
      <Text>Settings</Text>
    <Button title='Settings'
    onPress={()=>navigation.push('Parent')}
    />
    </View>
  )
}
function Profile({navigation}){
  return(
    <View>
      <Text>Profile</Text>
    <Button title='Profile'
    onPress={()=>navigation.goBack()}
    />
    </View>
  )
}

function DetailsScreen({route, navigation}) {
  const {name, id} = route.props
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed</Text>
      <Button
        title="Feed"
        onPress={() => navigation.navigate('Feed')}
      />
      <Text>Message</Text>
      <Button
        title="Message"
        onPress={() => navigation.navigate('Message')}
      />
    </View>
  );
}

export default App;

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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './assets/component/Profile';
import Settings from './assets/component/Settings';

const Stack = createNativeStackNavigator();




const App = () => {
  return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Parent" screenOptions={{headerShown:false}}>

          <Stack.Screen
            name="Parent"
            component={ParentScreen}
            options={{
              headerLeft:()=>{return(<Text>Root</Text>)},
              title: 'ParentScreen',
              headerTintColor: 'white',
              headerTitleStyle: {fontSize: 20},
              headerStyle: {backgroundColor: 'orange'},
            }}
          />
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

// function HomeScreen({route, navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Feedsss</Text>
//       <Button
//         title="Feed"
//         onPress={() => {
//           navigation.navigate('Feeds');
//         }}
//       />
//       <Text>Message</Text>
//       <Button
//         title="Message"
//         onPress={() => navigation.navigate('Messages', {name: 'vasu', age: 38})}
//       />
//     </View>
//   );
// }

export default App;

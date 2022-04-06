import {View, Text, Image} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ParentScreen from './Parent';
import Feeds from './assets/component/Feeds';
import Message from './assets/component/Message';
import TopTabNavigation from './TopTabNavigation';
import Settings from './assets/component/Settings';
import Cart from './assets/component/Cart';
import Menu from './assets/component/Menu';

const Tab = createMaterialBottomTabNavigator();
export default function BottomNavigator({navigation}) {
  return (
    <View style={{flex:1}}>
      <TopTabNavigation navigation = {navigation} />
    <Tab.Navigator
    activeColor='black'
    shifting={true}
    barStyle={{backgroundColor:'orange'}}
      screenOptions={{
        tabBarActiveBackgroundColor: 'orange',
        headerShown: false,
        tabBarStyle: {backgroundColor: '#FFB732'},
      }}>
      <Tab.Screen
        name="Feeds"
        component={Feeds}
        options={{
          tabBarColor:'skyblue',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 20, height: 20}}
                source={{
                  uri:focused?'https://cdn-icons-png.flaticon.com/512/2948/2948037.png': 'https://cdn-icons.flaticon.com/png/512/5752/premium/5752153.png?token=exp=1649162370~hmac=1e7c3ffd84dec6503c0fe1ea5a904033',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarColor:'wheat',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 20, height: 20}}
                source={{
                  uri:focused?'https://cdn-icons.flaticon.com/png/512/3482/premium/3482356.png?token=exp=1649246834~hmac=9971357ae63dd31e94012452883fd707': 'https://cdn-icons-png.flaticon.com/512/1370/1370907.png',
                }}
              />
            );
          },
        }}
      />
            <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarColor:'lightgreen',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 20, height: 20}}
                source={{
                  uri:focused?'https://cdn-icons.flaticon.com/png/512/2838/premium/2838838.png?token=exp=1649246914~hmac=4e073e7f1c044ef15eca157fd6d266bb': 'https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1649246939~hmac=ded720e94da2cf1d3bf1a6437d223c84',
                }}
              />
            );
          },
        }}
      />
               <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarColor:'lightpink',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({focused}) => {
            return (
              focused?
              <Image
                style={{width: 20, height: 20}}
                source={{
                  uri:'https://cdn-icons-png.flaticon.com/512/2099/2099153.png'
                }}
              />
              :
              <Image
                style={{width: 20, height: 20}}
                source={{
                  uri:'https://cdn-icons-png.flaticon.com/512/130/130918.png'
                }}
              />
            );
          },
        }}
      />

    </Tab.Navigator>
    </View>

  );
}

import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

export default function TopTabNavigation({navigation}) {

  return (
    <SafeAreaView style={styles.topNav}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/126/126492.png',
          }}
        />
      </TouchableOpacity>
      <Text style={{marginBottom:15}}>TopTabNavigation</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  topNav: {
    backgroundColor: 'orange',
    marginTop: '10%',
    margin: 10,
    flexDirection: 'row',

  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
    
  },
});

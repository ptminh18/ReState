// import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


// import ExploreScreen from './explore';
// import HomeScreen from '../../_layout';
// import ProfileScreen from './profile';
// import PropertiesScreen from '../properties/[id]';
// import SignInScreen from '../../sign-in'
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Index() {
  // const Stack = createStackNavigator();

  return (
    // <NavigationIndependentTree>
    //   <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home Page'>
    //     <Stack.Screen name="Home Page" component={HomeScreen} />
    //     <Stack.Screen name="Sign in" component={SignInScreen} />
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //     <Stack.Screen name="Properties" component={PropertiesScreen} />
    //     <Stack.Screen name="Explore" component={ExploreScreen} />
    //   </Stack.Navigator>
    // </NavigationIndependentTree>
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome to ReState</Text>
      <Link href={'/sign-in'}>Sign in</Link>
      <Link href={'/explore'}>Explore</Link>
      <Link href={'/(root)/(tabs)/profile'}>Profile</Link>
      <Link href={'/properties/[id]'}>Property</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTitle: {
    fontFamily: 'Rubik Medium',
    marginVertical: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

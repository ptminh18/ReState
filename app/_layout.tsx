// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import React from 'react';
// import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native';

// type RootStackParamList = {
//   'Sign in': undefined;
//   Explore: undefined;
//   Profile: undefined;
//   Properties: undefined;
// };

// const HomeScreen: React.FC = () => {
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
// //   const [fontsLoaded] = useFonts({
// //     Rubik: require('../../../assets/fonts/Rubik-Bold.ttf'),
// //   });

// //   if (!fontsLoaded) return null;

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text
//         style={{
//           fontFamily: 'Rubik',
//           marginVertical: 10,
//           fontSize: 24,
//           fontWeight: 'bold',
//         }}>
//         Welcome to Linkin Park
//       </Text>
//       <View
//         style={{
//           flexDirection: 'column',
//           alignItems: 'stretch',
//         }}>
//         <TouchableOpacity onPress={() => navigation.navigate('Sign in')}>
//           <Text>Sign in mother fucker</Text>
//         </TouchableOpacity>
//         <Button title="Sign in" onPress={() => navigation.navigate('Sign in')} />
//         <Button title="Explore" onPress={() => navigation.navigate('Explore')} />
//         <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
//         <Button title="Properties" onPress={() => navigation.navigate('Properties')} />
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return <Stack />;
}

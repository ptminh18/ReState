import React from 'react';
import { View, Text, ScrollView, Image, Touchable, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const SignIn = () => {
  const handLogin = () => {};
  const [fontsLoaded] = useFonts({
    "RubikRegular": require("../assets/fonts/RubikRegular.ttf"),
    "RubikBold": require("../assets/fonts/RubikBold.ttf"),
    "RubikMedium": require("../assets/fonts/RubikMedium.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image source={require('../assets/images/onboarding.png')} 
        style={styles.backgroundImage} 
        />

        <View style={{ paddingHorizontal: 20}}>
          <Text style={styles.welcomeTitle}>
            Welcome to Restate!
          </Text>

          <Text style={styles.contentTitle}>
            Let's Get Closer To {'\n'}
            <Text style={{ color: '#93C5FD'}}>
              Your Ideal Home
            </Text>

          </Text>
          
          <Text style={styles.contentText}>
              Login to ReState with Google
          </Text>

            <TouchableOpacity 
            onPress={handLogin}
            style={styles.googleButton}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image 
                source={require('../assets/images/google-true.png')}
                style={styles.googleImage}
                />
                
                <Text style={styles.googleText}>Continue with Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
   },
   backgroundImage: {
    width: '100%', 
    height: '66.6667%', 
    alignSelf: 'center', 
    resizeMode: 'contain',
   },
   welcomeTitle: {
    fontFamily: 'RubikRegular', 
    fontSize: 16,
    textAlign: 'center', 
    textTransform: 'uppercase', 
    color: '#191d31'
  },
  contentTitle: {
    fontFamily: 'RubikBold', 
    fontSize: 24, 
    textAlign: 'center', 
    marginTop: 8
  },
  contentText: {
    fontFamily: 'RubikRegular', 
    fontSize: 16, 
    textAlign: 'center', 
    marginTop: 12
  },
  googleButton: {
    backgroundColor: '#191d31',
    paddingVertical: 16,
    borderRadius: 8, //9999
    marginTop: 20,
    shadowColor: '#d4d4d8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6
  },
  googleImage: {
    width: 24, 
    height: 24, 
    alignSelf: 'center', 
    resizeMode: 'contain'
  },
  googleText: {
    fontFamily: 'RubikMedium', 
    fontSize: 18, 
    color: 'white', 
    marginLeft: 2
  }
})

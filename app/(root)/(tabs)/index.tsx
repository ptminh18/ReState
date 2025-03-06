import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search'
import { useFonts } from 'expo-font';
import { Card, FeaturedCards } from '@/components/Cards';
import Filters from '@/components/Filters';

export default function Index() {
  const [fontsLoaded] = useFonts({
    "RubikRegular": require("../../../assets/fonts/RubikRegular.ttf"),
    "RubikMedium": require("../../../assets/fonts/RubikMedium.ttf"),
    "RubikBold": require("../../../assets/fonts/RubikBold.ttf"),
    "RubikExtraBold": require("../../../assets/fonts/RubikExtraBold.ttf"),
    "RubikLight": require("../../../assets/fonts/RubikLight.ttf")
  });
  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }


  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={ styles.container }>
          <View style={{ 
            flex: 1, 
            flexDirection: 'row', 
            alignItems: 'center'
            }}
          >
            <Image 
            source={images.avatar} 
            style={{ 
              width: 48, 
              height: 48, 
              borderRadius: 24 
            }}
            />

            <View 
            style={{ 
              flexDirection: 'column',
              marginLeft: 8, 
              alignItems: 'flex-start', 
              justifyContent: 'center' 
            }}
            >
              <Text style={styles.hi}>Hi!</Text>
              <Text style={styles.name}>David</Text>

            </View>
          </View>
          
          <Image 
          source={icons.bell} 
          style={{ width: 24, height: 24 }}
          />
        
        </View>

        <Search />
      
        <View style={{ marginVertical: 10 }}>
          <View style={styles.body}>
            <Text style={styles.featureTitle}>
              Featured
            </Text>

            <TouchableOpacity>
              <Text style={styles.seeAllTitle}>
                See all
              </Text>
            </TouchableOpacity>

          </View>
          
          <View style={{
            flexDirection: 'row',
            gap: 10,
            marginTop: 10,
          }}
          >
            <FeaturedCards/>
            <FeaturedCards/>
            <FeaturedCards/>
            </View>
        </View>

        <View style={styles.body}>
            <Text style={styles.featureTitle}>
              Recommendation
            </Text>

            <TouchableOpacity>
              <Text style={styles.seeAllTitle}>
                See all
              </Text>
            </TouchableOpacity>

          </View>
          
          <Filters/>

          <View style={{
            flexDirection: 'row',
            gap: 10,
            marginTop: 10,
          }}
          >
            <Card/>
            <Card/>
            </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hi: {
    fontSize: 12,
    fontFamily: 'RubikRegular',
  },
  name: {
    fontSize: 16,
    fontFamily: 'RubikMedium',
  },
  featureTitle: {
    fontSize: 20,
    fontFamily: 'RubikBold',
    fontWeight: 'bold', 
  },
  seeAllTitle: {
    fontSize: 16,
    fontFamily: 'RubikBold',
    fontWeight: 'bold',
    color: '#A78BFA',
  },
  body: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems:'center',
  }
});

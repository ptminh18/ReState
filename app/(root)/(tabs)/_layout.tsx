import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import icons from '@/constants/icons';
import { useFonts } from 'expo-font';

const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => (
    <View style={styles.tabIcons}>
        <Image 
        source={icon} 
        tintColor={focused ? '#0061ff' : '#666876'}
        resizeMode='contain'
        style={{ height: 24, width: 24 }}
        />
        <Text style={[styles.tabTitle, focused ? styles.titleFocused : styles.titlenotFocused]}>
            {title}
        </Text>
    </View>
 )
 
const TabsLayout = () => {
      const [fontsLoaded] = useFonts({
        "RubikRegular": require("../../../assets/fonts/RubikRegular.ttf"),
        "RubikMedium": require("../../../assets/fonts/RubikMedium.ttf"),
      });
        if (!fontsLoaded) {
            return <Text>Loading fonts...</Text>;
        }

   return (
     <Tabs 
     screenOptions={{ 
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            borderTopColor: '#0061FF1A',
             borderTopWidth: 1,
            minHeight: 70
        }}
     }> 

       <Tabs.Screen 
       name='index'
       options={{
        title: 'Home', 
        headerShown: false, 
        tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.home} focused={focused} title={'Home'}/>
        )}}
        />

        <Tabs.Screen 
        name='explore'
        options={{
         title: 'Explore', 
         headerShown: false, 
         tabBarIcon: ({focused}) => (
             <TabIcon icon={icons.search} focused={focused} title={'Explore'}/>
         )}}
         />

         <Tabs.Screen 
         name='profile'
         options={{
          title: 'Profile', 
          headerShown: false, 
          tabBarIcon: ({focused}) => (
              <TabIcon icon={icons.person} focused={focused} title={'Profile'}/>
          )}}
       />
     </Tabs>
   )
 }
 
 export default TabsLayout

 const styles = StyleSheet.create({
    tabIcons: {
        flex: 1,
        marginTop: 12,
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabTitle: {
        fontSize: 12,
        fontFamily: 'RubikRegular',
        width: '100%',
        marginTop: 4,
        textAlign: 'center',
    },
    titleFocused: {
        color: '#93C5FD',
        fontFamily: 'RubikMedium',
    },
    titlenotFocused: {
        color: '#9CA3AF',
        fontFamily: 'RubikRegular',
    },
 })
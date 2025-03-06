import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Touchable, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../../constants/icons";
import images from "../../../constants/images";
import { settings } from "@/constants/data";

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({ 
  icon, title, onPress, textStyle, showArrow = true
} : SettingsItemProps) => (
<TouchableOpacity onPress={onPress} style={styles.options}>
    <View style={styles.singleOption}>
      <Image source={icon} style={{ width: 24, height: 24 }}/>
      
      <Text style={styles.optionTitle}>{title}</Text>
    </View>

    {showArrow ? (
      <Image source={icons.rightArrow} style={{ width: 20, height: 20 }} />
    ) : null}
  </TouchableOpacity>
)

const Prolife = () => {
  const handleLogOut = () => {
    console.log("Logout");
  }

  return (
    <SafeAreaView>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 128, paddingHorizontal: 28}}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>

          <Image source={icons.bell} style={{ height: 20, width: 20 }}/>
        </View>

        <View style={styles.content}>
          <View style={styles.avatarContent}>
            <Image source={images.avatar} style={styles.avatar}/>

            <TouchableOpacity style={styles.editIcon}>
              <Image source={icons.edit} style={{ width: 30, height: 30 }}/>
            </TouchableOpacity>

            <Text style={styles.name}>
              David Cooper
            </Text>

          </View>
        </View>

        <View style={styles.contentContainer}>
            <SettingsItem 
            icon={icons.calendar} 
            title='My Bookings' 
            onPress={function (): void{
              throw new Error("Function not implemented")
            }}/>
            <SettingsItem 
            icon={icons.wallet} 
            title='Payment'
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}/>
        </View>

        <View style={styles.body}>
          {settings.slice(2).map((item, index) => (
            <SettingsItem onPress={function (): void {
              throw new Error("Function not implemented.");
            } } key={index} {...item} />
          ))}
        </View>

        <View style={styles.body}>
          <SettingsItem icon={icons.logout} title='Logout' textStyle='text-danger'
          showArrow={false} onPress={handleLogOut}/>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Prolife;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "RubikBold",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  avatarContent: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginTop: 20
  },
  avatar: {
    width: 135,
    height: 135,
    position: 'relative',
    borderRadius: 9999,
  },
  editIcon: {
    position: 'absolute',
    bottom: 39,
    right: 7,
  },
  name: {
    fontSize: 24,
    fontFamily: "RubikBold",
    marginTop: 8,
  },
  contentContainer: {
    flexDirection: 'column',
    marginTop: 40
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  singleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  optionTitle: {
    fontSize: 18,
    fontFamily: 'RubikMedium'
  },
  body: {
    flexDirection: 'column',
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 20,
    borderColor: '#e0e0e0'
  }
});

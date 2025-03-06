import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { categories } from '@/constants/data';

const Filters = () => {
    const params = useLocalSearchParams<{filter?: string}>();
    const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All');

    const handleCategoryPress = (category : string) => {
        if (selectedCategory === category) {
            setSelectedCategory('All');
            router.setParams({filter: 'All'});
            return;
        }
        setSelectedCategory(category);
        router.setParams({filter: category});
    }
  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    style={{ marginTop: 12, marginBottom: 8}}
    >
        {categories.map((item, index) => (
            <TouchableOpacity 
            onPress={() => handleCategoryPress(item.category)}
            style={[
                styles.base,
                , selectedCategory === item.category ? styles.selected : styles.unselected,
            ]}>
                <Text style={[
                    styles.baseText,
                    , selectedCategory === item.category ? styles.selectedText : styles.unselectedText,
                ]}
                >{item.title}</Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

export default Filters

const styles = StyleSheet.create({
    base: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 999,
    },
    selected: {
        backgroundColor: '#187bcd',
    },
    unselected: {
        backgroundColor: "#E0F2FE",
        borderWidth: 1,
        borderColor: "#BAE6FD",
    },
    baseText: {
        fontSize: 14
    },
    selectedText: {
        color: 'white',
        fontFamily: 'RubikBold',
        marginTop: 2,
    },
    unselectedText: {
        fontFamily: 'RubikRegular'
    }
})
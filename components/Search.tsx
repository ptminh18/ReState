import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import icons from '@/constants/icons';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{ query ?: string}>();
    const [search, setSearch] = useState(params.query);

    const debouncedSearch = useDebouncedCallback(
        (text: string) => router.setParams({ query: text}), 500

    )

    const handleSearch = (text: string) => {
        setSearch(text);
        debouncedSearch(text);
    }

    return (
    <View 
    style={styles.container}>
        <View 
        style={styles.searchBox}>
            <Image 
            source={icons.search} 
            style={{ width: 20, height: 20 }}
            />

            <TextInput 
            value={search}
            onChangeText={handleSearch}
            placeholder='Search for anything'
            style={{ 
                fontSize: 14,
                fontFamily: 'RubikRegular',
                marginLeft: 8,
                color: '#A3A3A3'
            }}
            />

        </View>

        <TouchableOpacity>
            <Image
            source={icons.filter} 
            style={{ width: 20, height: 20 }}/>
        </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        paddingVertical: 8,
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        borderWidth: 1,
        borderColor: '#E5E7EB'
    },
    searchBox: {
        flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'flex-start',
            alignItems:'center',
            zIndex: 50,
    }
})
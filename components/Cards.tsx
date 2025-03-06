import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import images from '@/constants/images';
import icons from '@/constants/icons';

interface Props {
    onPress?: () => void;
}

export const FeaturedCards = ({ onPress }: Props) => {
    return (
    <TouchableOpacity style={styles.featuredContainer}>
        <Image 
        source={images.japan} 
        style={styles.featuredCard}
        />

        <Image 
        source={images.cardGradient} 
        style={styles.featuredCardGradient}
        />

        <View style={styles.featuredRated}>
            <Image 
            source={icons.star} 
            style={{
                height: 14,
                width: 14,
            }}
            />

            <Text style={[styles.ratedSection, {marginLeft: 4}]}>
                4.4
            </Text>

        </View>

        <View style={styles.featuredInformation}>
            <Text style={styles.featuredName}>
                Modern Apartment
            </Text>

            <Text style={styles.featuredAddress}>
                20B Linh Trung St, Thu Duc
            </Text>

            <View style={styles.featuredPriceAndLoveSection}>
                <Text style={styles.featuredPriceText}>
                    $70
                </Text>

                <Image 
                source={icons.heart} 
                style={{
                    width: 20,
                    height: 20,
                }}
                />

            </View>

        </View>
        
    </TouchableOpacity>
  )
}

export const Card = ({ onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.cardRated}>
                <Image 
                source={icons.star} 
                style={{
                    height: 10,
                    width: 10,
                }}
                />

                <Text style={[styles.ratedSection, {marginLeft: 2}]}>
                    4.4
                </Text>

            </View>

                <View style= {{
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                >
                    <Image 
                    source={images.newYork} 
                    style={styles.cardImage}
                    />

                    </View>


            <View style={{
                flexDirection: 'column',
                marginTop: 6,
            }}
            >
                <Text style={styles.cardName}>
                    84 Studio
                </Text>

                <Text style={styles.cardAddress}>
                    20B Linh Trung St, Thu Duc
                </Text>

                <View style={styles.cardPriceSection}
                >
                    <Text style={styles.cardPriceText}
                    >
                        $70
                    </Text>

                    <Image 
                    source={icons.heart} 
                    style={styles.cardLoveSection}
                    tintColor='#191d31'
                    />

                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    featuredContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        // width: '100%',
        height: 240,
        position: 'relative',
    },
    featuredCard: {
        width: 190,
        height: 240,
        borderRadius: 16,
    },
    featuredCardGradient: {
        width: 190,
        height: 240,
        borderRadius: 16,
        position: 'absolute',
    },
    featuredRated: {
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 9999,
        top: 10,
        right: 10,
        position: 'absolute',
    },
    ratedSection: {
        fontSize: 12,
        color: '#A78BFA',
        fontFamily: 'RubikBold',
    },
    featuredInformation: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        bottom: 15,
        left: 10,
        // right: 20,
    },
    featuredName: {
        fontSize: 18,
        fontFamily: 'RubikExtraBold',
        color: 'white'
    },
    featuredAddress: {
        fontSize: 14,
        fontFamily: 'RubikRegular',
        color: 'white',
    },
    featuredPriceAndLoveSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%'
    },
    featuredPriceText: {
        fontSize: 18,
        fontFamily: 'RubikExtraBold',
        color: 'white',
    },
    cardContainer: {
        borderRadius: 8,
        shadowColor: 'rgba(83, 81, 81, 0.7)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 6,
        // elevation: 5,
        // position: 'relative',
        backgroundColor: 'white',
    },
    cardRated: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        paddingHorizontal: 8,
        top: 10,
        right: 10,
        padding: 4,
        borderRadius: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        zIndex: 50, 
        marginRight: 2,
    },
    cardImage: {
        paddingTop: 8,
        width: '90%',
        height: 160,
        borderRadius: 8,
    },
    cardName: {
        paddingHorizontal: 6,
        fontSize: 14,
        fontFamily: 'RubikBold'
    },
    cardAddress: {
        paddingHorizontal: 6,
        fontSize: 12,
        fontFamily: 'RubikRegular',
    },
    cardPriceSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
    },
    cardPriceText: {
        paddingHorizontal: 6,
        fontSize: 18,
        fontFamily: 'RubikExtraBold',
        color: '#A78BFA',
        paddingBottom: 10,
    },
    cardLoveSection: {
        width: 20,
        height: 20,
        marginRight: 8,
        marginBottom: 10,
    }
})
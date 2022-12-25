import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from '@rneui/base'
import { Image } from 'react-native'

export default function SliderCard({ name, location, image }) {
    return (
        <View style={styles.container}>
            <Image style={styles.sliderImage} source={{ uri: image }} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.locationContainer}>
                    <Icon
                        name='location-arrow'
                        type='font-awesome'
                        color='#fff'
                        size={15}
                    />
                    <Text style={styles.location}>
                        {location}
                    </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        width: 300,
        height: 253,
        backgroundColor: '#D0CBFF',
        position: 'relative',
        borderRadius: 19,
        marginHorizontal: 10,

    },
    sliderImage: {
        width: "100%",
        height: "100%",
        borderRadius: 19,
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 81,
        backgroundColor: '#rgba(160, 160, 160, 0.9)',
        borderRadius: 19,
        padding: 10,
    },
    title: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        fontSize: 16,
        color: '#EAFDFC',
        marginLeft: 5,
    }
})
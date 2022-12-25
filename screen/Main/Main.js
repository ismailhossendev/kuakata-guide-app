import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import MainLayout from '../../src/layout/MainLayout'
import SliderCard from './SliderCard'

export default function Main() {
    const palaces = [
        {
            id: 1,
            name: 'Kuakata Beach',
            location: '0 Km',
            image: 'https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/6230816_Kuakata_beach_Bangladesh.jpg'
        },
        {
            id: 2,
            name: 'Fatra Char',
            location: '7 km',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/fe/a4/d2/fatrar-char-kuakata.jpg?w=600&h=-1&s=1'
        },
    ]

    return (
        <MainLayout>
            <View style={styles.container}>
                <ScrollView horizontal>
                    {
                        palaces.map((palace) => (
                            <SliderCard
                                key={palace.id}
                                name={palace.name}
                                location={palace.location}
                                image={palace.image}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
    }
})
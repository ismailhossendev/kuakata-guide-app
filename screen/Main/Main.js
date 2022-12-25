import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import MainLayout from '../../src/layout/MainLayout'
import SliderCard from './SliderCard'
import Hero from './Hero'
import PopularTravelWay from './PopularTravelWay'
import PopularPalaces from './PopularPalaces'

export default function Main() {
    return (
        <MainLayout>
            <View style={styles.container}>
                <Hero />
                <PopularTravelWay />
                <PopularPalaces />
            </View>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {

        paddingTop: 10,
    }
})
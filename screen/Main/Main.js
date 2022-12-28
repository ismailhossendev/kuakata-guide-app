import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import MainLayout from '../../src/layout/MainLayout'

import Hero from './Hero'
import PopularTravelWay from './PopularTravelWay'
import PopularPalaces from './PopularPalaces'
import Hotels from './Hotels'

export default function Main({ navigation }) {
    return (
        <MainLayout>
            <View style={styles.container}>
                <Hero />
                <PopularTravelWay />
                <PopularPalaces
                    navigation={navigation}
                />
                <Hotels />
            </View>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {

        paddingTop: 10,
    }
})
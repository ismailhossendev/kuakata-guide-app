import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PalaceCard from '../../src/components/Cards/PalaceCard'
import MainLayout from '../../src/layout/MainLayout'

const Palaces = ({ navigation }) => {
    return (
        <MainLayout
            title="All Palaces"
            navigation={navigation}
        >
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <PalaceCard />
                    <PalaceCard />
                    <PalaceCard />
                    <PalaceCard />
                    <PalaceCard />
                    <PalaceCard />
                    <PalaceCard />
                    <PalaceCard />
                    <PalaceCard />
                    <PalaceCard />
                </View>
            </View>
        </MainLayout>
    )
}

export default Palaces

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContainer: {

    }
})
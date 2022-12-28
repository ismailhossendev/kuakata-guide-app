import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PalaceCard from '../../src/components/Cards/PalaceCard'

const PopularPalaces = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>Popular Palaces</Text>
                <Text style={{ fontSize: 18, fontWeight: "700" }}
                    onPress={() => navigation.navigate("Palaces")}
                >All</Text>
            </View>
            <View style={styles.cardContainer}>
                <PalaceCard />
                <PalaceCard />
            </View>
        </View>
    )
}

export default PopularPalaces

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
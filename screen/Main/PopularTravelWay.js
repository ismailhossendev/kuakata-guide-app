import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalCard from '../../src/components/Cards/GlobalCard'
import { popularTravelWay } from '../../src/data/TravelWay'

const PopularTravelWay = () => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>Popular Travel Way</Text>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>All</Text>
            </View>
            <ScrollView horizontal>
                {
                    popularTravelWay.map((item, index) => {
                        return (
                            <GlobalCard
                                key={index}
                                image={item.image}
                                name={item.name}
                                rent={item.rent}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default PopularTravelWay

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,

    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    }
})
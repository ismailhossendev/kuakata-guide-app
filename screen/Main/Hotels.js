import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PopularHotels } from '../../src/data/Hotels'
import GlobalCard from '../../src/components/Cards/GlobalCard'

const Hotels = () => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>Hotels</Text>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>All</Text>
            </View>
            <ScrollView horizontal>
                {
                    PopularHotels.map((item, index) => {
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

export default Hotels

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,

    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
})
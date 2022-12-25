import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'

export default function BottomBar() {
    return (
        <ScrollView style={styles.BottomBar}>
            <Text style={styles.text}>BottomBar</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    BottomBar: {
        height: 70,
        width: '100%',
        backgroundColor: '#000',
        borderRadius: 47,
        paddingHorizontal: 20,
    },
    text: {
        color: '#fff',
    }
})
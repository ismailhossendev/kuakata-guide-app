import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import Header from '../components/Global/Header'

export default function MainLayout({ children }) {
    return (
        <View style={styles.container} >
            <StatusBar />
            <Header />
            <ScrollView style={{ marginBottom: 25 }}>
                {children}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 37,
        marginBottom: 42,
        position: 'relative',
        backgroundColor: '#fff',

    }
})
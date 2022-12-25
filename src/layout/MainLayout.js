import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import BottomBar from '../components/Global/BottomBar'
import Header from '../components/Global/Header'

export default function MainLayout({ children }) {
    return (
        <View style={styles.container} >
            <StatusBar />
            <Header />
            {/* <View style={styles.bottomBar} >
                <BottomBar />
            </View> */}
            <ScrollView style={{ marginBottom: 25 }}>
                {children}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 37,
        marginBottom: 20,
        position: 'relative',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
    }
})
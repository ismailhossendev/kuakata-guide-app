import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={{ flexDirection: "row", paddingHorizontal: 10, alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 27, fontWeight: "bold", }}>Kuakata</Text>
            <Image style={styles.logo} source={{ uri: "https://porzoton.com/wp-content/uploads/2020/04/Red-Crab-Island-Kuakata.jpg" }} />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 45,
        height: 45,
        borderRadius: 50,
    }
})
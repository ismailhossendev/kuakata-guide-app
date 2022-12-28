import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { Icon } from '@rneui/base'

export default function Header({ title, navigation }) {
    return (
        <View style={{ flexDirection: "row", padding: 10, alignItems: "center", justifyContent: "space-between" }}>
            {navigation && <Icon
                name='arrow-back'
                type='ionicon'
                onPress={() => navigation.goBack()}
            />}
            <Text style={{ fontSize: 27, fontWeight: "bold", }}>{title ? title : "Kuakata"}</Text>
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
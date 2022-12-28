import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
const GlobalCard = ({ name, image, rent }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.title}>Rent:{rent}</Text>
            </View>
        </View>
    )
}


export default GlobalCard

const styles = StyleSheet.create({
    card: {
        height: 175,
        width: Dimensions.get('window').width / 50 * 22,
        backgroundColor: '#D0CBFF',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        position: 'relative',
        borderWidth: 2,
        borderColor: '#91D8E4',
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 45,
        backgroundColor: "rgba(160, 160, 160, 0.9)",
        borderRadius: 10,
        padding: 5,
    },
    title: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
})
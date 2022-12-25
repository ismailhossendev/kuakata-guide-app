import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Icon } from '@rneui/base'

const PalaceCard = () => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: "https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/6230816_Kuakata_beach_Bangladesh.jpg" }} style={styles.image} />
            <View style={styles.Details}>
                <View style={{ width: "80%" }}>
                    <Text style={{ fontSize: 18, fontWeight: "700" }}>Kuakata Beach</Text>
                    <Text style={{ fontSize: 14, fontWeight: "400", flexWrap: "wrap", width: "100%", overflow: "hidden" }}>This is the Places To Visit When in Kuakata adventure tour.</Text>
                </View>
                <View style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "20%",
                    height: "100%",
                }}>
                    <Button type="solid"
                        buttonStyle={
                            {
                                width: "100%",
                                height: "100%",
                            }
                        }
                    >
                        <Icon
                            name='arrow-right'
                            type='font-awesome'
                            color='#fff'
                        />
                    </Button>
                </View>
            </View>


        </View>
    )
}

export default PalaceCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: "100%",
        height: 100,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        flexDirection: "row",
    },
    image: {
        width: "30%",
        height: "100%",
        borderRadius: 10,
    },
    Details: {
        flexDirection: "row",
        width: "70%",
        paddingHorizontal: 10,
        position: "relative",
    }

})
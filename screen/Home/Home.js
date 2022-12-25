import { Button, Icon } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.main}>
            <StatusBar />
            <Image style={styles.image} source={{
                uri: 'https://steemitimages.com/640x0/https://gateway.ipfs.io/ipfs/QmaxcF3W3bxpZmYynoqCo6XZ3y41TdkEkMo4C74maH5j2L',
            }} />
            <View style={styles.container}>
                <Text style={{ fontSize: 36, fontWeight: 'bold', marginVertical: 30 }}>Winter Vacation Trips</Text>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>Enjoy your winter vacations with warmth and amazing sightseeing on the mountains. Enjoy the best experience with us!</Text>
                <Button buttonStyle={{ height: 50, width: 181, borderRadius: 25 }} type="solid"
                    onPress={() => navigation.navigate('main')}
                >
                    Let’s Go!
                    <Icon style={{ marginLeft: 10 }}
                        name='long-arrow-right'
                        type='font-awesome'
                        color='#fff' />
                </Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        height: "100%",
    },
    container: {
        paddingHorizontal: 30,
    },
    image: {
        width: "100%",
        height: 450,
        borderRadius: 37
    },
});

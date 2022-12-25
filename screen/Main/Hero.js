import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SliderCard from './SliderCard'
import { popularPalacesSlider } from '../../src/data/Palaces'

export default function Hero() {
    return (
        <ScrollView horizontal>
            {
                popularPalacesSlider.map((palace) => (
                    <SliderCard
                        key={palace.id}
                        name={palace.name}
                        location={palace.location}
                        image={palace.image}
                    />
                ))
            }
        </ScrollView>
    )
}
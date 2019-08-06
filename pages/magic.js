import React from 'react'
import { ScrollView, View } from 'react-native'
import MagicCard from '../components/magic-card'

export default function () {
  const card = {
    name: 'Wall of Roots',
    src: 'https://cdn.pucatrade.com/cards/crops/sm/13629.jpg'
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
    >
      <MagicCard {...card} />
    </ScrollView>
  )
}

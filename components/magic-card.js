import React, { Component } from 'react'
import { AppRegistry, View, Text, Image } from 'react-native'

export default class MagicCard extends Component {
  render () {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Image
          style={{ width: 400, height: 300 }}
          source={{ uri: this.props.src }}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('MagicCard', () => MagicCard)

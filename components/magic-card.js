import React, { Component } from 'react'
import { AppRegistry, View, Text, Image } from 'react-native'

export default class MagicCard extends Component {
  render () {
    return (
      <View>
        <Text style={styles.header}>{this.props.name}</Text>
        <Image
          style={{ width: 400, height: 300 }}
          source={{ uri: this.props.src }}
        />
      </View>
    )
  }
}

const styles = {
  header: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 5
  }
}

AppRegistry.registerComponent('MagicCard', () => MagicCard)

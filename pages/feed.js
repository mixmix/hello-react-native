import React, { Component } from 'react'
import { FlatList, View, Text } from 'react-native'

export default class Feed extends Component {
  constructor () {
    super()

    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount () {
    fetchData((err, data) => {
      if (err) console.error(err)

      this.setState({
        isLoading: false,
        data
      })
    })
  }

  render () {
    if (this.state.isLoading) return Loading()

    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => Post(item)}
        style={{ padding: 10 }}
      />
    )
  }
}

function Post ({ author, text }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontWeight: 'bold' }}>{author}: </Text>
      <Text>{text} </Text>
    </View>
  )
}

function Loading () {
  return (
    <Text>Loading...</Text>
  )
}

function fetchData (cb) {
  const data = [
    { key: 'm0', author: 'mix', text: 'hey this is ok!' },
    { key: 'm1', author: 'luandro', text: 'can you hear me?' },
    { key: 'm2', author: 'ben', text: 'yeah loud and clear' }
  ]

  setTimeout(
    () => cb(null, data),
    1e3
  )
}

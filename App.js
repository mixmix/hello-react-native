/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  SafeAreaView,
  Button,
  View,
  StatusBar,
  StyleSheet
} from 'react-native'

import FeedPage from './pages/feed'
import MagicPage from './pages/magic'
import ReactPage from './pages/react'

export default class HelloWorldApp extends Component {
  constructor () {
    super()

    // NOTE: terrible hand-rolled tabs
    // check out e.g. https://www.npmjs.com/package/react-native-tab-view
    this.state = {
      pages: [
        FeedPage,
        MagicPage,
        ReactPage
      ],
      currentPage: 0
    }
  }

  render () {
    const Page = this.state.pages[this.state.currentPage]

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'flex-start' }}>
        <StatusBar barStyle='dark-content' />
        <SafeAreaView style={{ flex: 1, alignItems: 'stretch' }}>
          <View style={styles.tabBar}>
            <Button title='Feed' onPress={() => this.setState({ currentPage: 0 })} style={styles.navButton} />
            <Button title='Magic' onPress={() => this.setState({ currentPage: 1 })} style={styles.navButton} />
            <Button title='React Demo' onPress={() => this.setState({ currentPage: 2 })} style={styles.navButton} />
          </View>
          <Page />
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  navButon: {
    minWidth: 200
  }
})

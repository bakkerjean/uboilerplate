import React, { Component } from 'react'
import withTheme from './withTheme'
import Routes from './routes'

class App extends Component {

  render() {
    return <Routes />
  }
}

export default withTheme(App)

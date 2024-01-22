import React, { Component } from 'react'
import SimpleCounter from './Components/SimpleCounter'
import PureCounter from './Components/PureCounter'

export default class App extends Component {
  render() {
    return (
      <>
        <SimpleCounter/>
        <PureCounter/>
      </>
    )
  }
}

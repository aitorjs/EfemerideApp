import React from 'react'
// import axios from 'axios'

export default class AppComponent extends React.Component {
  render () {
    return <div>
      <h1>HOLA</h1>
      {this.props.children}
    </div>
  }
}

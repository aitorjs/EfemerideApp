import React from 'react'
import EfemerideList from './EfemerideList'

export default class AppComponent extends React.Component {
  render () {
    return <div>
      <EfemerideList />
      {this.props.children}
    </div>
  }
}

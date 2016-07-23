import React from 'react'

import EfemerideListItem from './EfemerideListItem'

export default class EfemerideListItems extends React.Component {
  render () {
    let efemerides = this.props.efemerides

    return <ul id='listItems'>
      {efemerides.map(function (efemeride) {
        return <EfemerideListItem key={efemeride.id} efemeride={efemeride} />
      })}
    </ul>
  }
}

EfemerideListItems.propTypes = {
  efemerides: React.PropTypes.array.isRequired
}


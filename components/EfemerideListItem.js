import React from 'react'
import './efemerideListItem.scss'

export default class EfemerideListItem extends React.Component {
  render () {
    return <div className='row'>
      <div className='col s9' id='listItem'>
        <h4>1927</h4>
        <p>El rey Athelstan unifica los reinos anglosajones y funda lo que actualmente es Inglaterra.</p>
      </div>
    </div>
  }
}

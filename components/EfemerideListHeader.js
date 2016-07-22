import React from 'react'
import './efemerideListHeader.scss'

export default class EfemerideListHeader extends React.Component {
  render () {
    return <div className='row'>
      <div className='col s12' id='listHeader'>
        <h5>EFEMERIDES</h5>
        <span>12/06/2016</span>
      </div>
    </div>
  }
}

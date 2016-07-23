import React from 'react'
import './efemerideListItem.scss'

export default class EfemerideListItem extends React.Component {
  render () {
    let efemeride = this.props.efemeride

    return <div className='row'>
      <div className='col s8'>
        <li className='listItem'>
          <h4>{efemeride.date}</h4>
          <p>{efemeride.data}</p>
        </li>
      </div>
    </div>
  }
}

EfemerideListItem.propTypes = {
  efemeride: React.PropTypes.object.isRequired
}

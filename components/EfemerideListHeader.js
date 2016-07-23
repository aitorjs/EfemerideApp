import React from 'react'
import './efemerideListHeader.scss'

export default class EfemerideListHeader extends React.Component {
  render () {
    return <div className='row'>
      <div className='col s9' id='listHeader'>
        <h5>{this.props.title}</h5>
        <span>{this.props.date}</span>
      </div>
    </div>
  }
}

EfemerideListHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string
}

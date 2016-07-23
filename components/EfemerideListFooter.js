import React from 'react'
import './efemerideListFooter.scss'

export default class EfemerideListFooter extends React.Component {
  render () {
    return <div className='row'>
      <div className='col s9' id='listFooter'>
        CC 2016 <a href={this.props.url}>{this.props.author}</a>
      </div>
    </div>
  }
}

EfemerideListFooter.propTypes = {
  url: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired
}

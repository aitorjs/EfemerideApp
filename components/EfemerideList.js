import React from 'react'

import EfemerideListHeader from './EfemerideListHeader'
import EfemerideListFooter from './EfemerideListFooter'
import './efemerideList.scss'

export default class EfemerideList extends React.Component {
  render () {
    return <div className='container' id='list'>
      <EfemerideListHeader />
      <EfemerideListFooter />
    </div>
  }
}

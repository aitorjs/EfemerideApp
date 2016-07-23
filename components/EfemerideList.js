import React from 'react'

import EfemerideListHeader from './EfemerideListHeader'
import EfemerideListFooter from './EfemerideListFooter'
import EfemerideListItem from './EfemerideListItem'
import './efemerideList.scss'

export default class EfemerideList extends React.Component {
  render () {
    return <div className='container' id='list'>
      <EfemerideListHeader />

      <EfemerideListItem />
      <EfemerideListItem />
      <EfemerideListItem />
      <EfemerideListItem />
      <EfemerideListItem />

      <EfemerideListFooter />
    </div>
  }
}

import React, { useState } from 'react'
import Purchase from './Purchase'
import Review from './Review'
import Question from './Question'

const TabContent = (props) => {
    const {tab, newItem, id} = props
    const [fade,setFade] = useState('')

  return (
    <div style={{padding:'46px 0 0'}}>
        {
            [<div style={{margin:'0 auto',width:'90%'}}><img src={newItem[id].detailUrl} alt="detail" width={'100%'} /><br /><img src={newItem[id].detailUrl2} alt="detail" width={'100%'} /><br /><img src={newItem[id].detailUrl3} alt="detail" width={'100%'} /></div>,<Purchase />,<Review />,<Question />][tab]
        }
    </div>
  )
}

export default TabContent
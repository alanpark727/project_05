import React, { useState } from 'react'
import Purchase from './Purchase'
import Review from './Review'
import Question from './Question'

const TabContent = (props) => {
    const {tab, selproduct} = props
    const [fade,setFade] = useState('')

  return (
    <div style={{padding:'46px 0 0'}}>
        {
            [<div style={{margin:'0 auto',width:'90%'}}><img src={selproduct.detailUrl} alt="detail" width={'100%'} /></div>,<Purchase />,<Review />,<Question />][tab]
        }
    </div>
  )
}

export default TabContent
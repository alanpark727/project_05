import React, { useState } from 'react'

const TabContent = (props) => {
    const {tab, newItem, id} = props
    const [fade,setFade] = useState('')

  return (
    <div>
        {
            [<div style={{margin:'0 auto',width:'80%'}}><img src={newItem[id].detailUrl} alt="" /><br /><img src={newItem[id].detailUrl2} alt="" /><br /><img src={newItem[id].detailUrl3} alt="" /></div>,<div>내용1</div>,<div>내용2</div>,<div>내용3</div>,<div>내용4</div>][tab]
        }
    </div>
  )
}

export default TabContent
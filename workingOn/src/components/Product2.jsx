import React from 'react'
import {Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const {worlds, i, no, id, j} = props;
    const navigate = useNavigate();    

  return (
    <Col md={3} onClick={()=>{navigate('/worlds2023/'+'detail/'+ no[i])}} className='text-center mb-3'>
        <img src={worlds.imgUrl} width='80%' alt="newItem" />
        <h4 style={{fontSize:'1.1rem', fontWeight:'600'}}>{worlds.title}</h4>
        <hr />
        <p style={{fontSize:'1rem', fontWeight:'700'}}>{worlds.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
    </Col>
  )
}

export default Product
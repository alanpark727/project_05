import React from 'react'
import {Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const {newItem, i, no, j} = props;
    const navigate = useNavigate();
    const navigateTarget = ['/newarrival','/worlds2023','/uniforms']

  return (
    <Col md={3} onClick={()=>{navigate(navigateTarget[j]+'/detail/'+ no[i])}} className='text-center mb-3'>
        <img src={newItem.imgUrl} width='80%' alt="newItem" />
        <h4 style={{fontSize:'1.1rem', fontWeight:'600'}}>{newItem.title}</h4>
        <hr />
        <p style={{fontSize:'1rem', fontWeight:'700'}}>{newItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
    </Col>
  )
}

export default Product
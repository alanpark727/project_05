import React from 'react'
import {Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const {newItem, i, no, id} = props;
    const navigate = useNavigate();

  return (
    <Col md={3} onClick={()=>{navigate('/newarrival/detail/'+ no[i])}}>
        <img src={newItem.imgUrl} width='80%' alt="newItem" />
        <h4>{newItem.title}</h4>
        <p>{newItem.code}</p>
        <p>{newItem.price}</p>
    </Col>
  )
}

export default Product
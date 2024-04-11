import React from 'react'
import {Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const {newItem, i, no, id, j} = props;
    const navigate = useNavigate();
    const navigateTarget = ['/newarrival','/worlds2023']

  return (
    <Col md={3} onClick={()=>{navigate(navigateTarget[j]+'/detail/'+ no[i])}}>
        <img src={newItem.imgUrl} width='80%' alt="newItem" />
        <h4>{newItem.title}</h4>
        <p>{newItem.code}</p>
        <p>{newItem.price}</p>
    </Col>
  )
}

export default Product
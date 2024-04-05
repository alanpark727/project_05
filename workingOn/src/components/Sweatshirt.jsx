import React from 'react'
import {Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Sweatshirt = (props) => {
    const {hoodie, i, no} = props;
    const navigate = useNavigate();

  return (
    <Col md={3} onClick={()=>{navigate('/shirts/detail/'+ no[i])}}>
        <img src={hoodie.imgUrl} width='80%' alt="hoodie" />
        <h4>{hoodie.title}</h4>
        <p>{hoodie.code}</p>
        <p>{hoodie.price}</p>
    </Col>
  )
}

export default Sweatshirt
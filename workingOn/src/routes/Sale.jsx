import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const Sale = (props) => {
    const {sale, no, i} = props;
    const navigate = useNavigate();

  return (
    <Col md={3}>
        <img src={sale.imgUrl} width='80%' alt="sale" />
        <h4>{sale.title}</h4>
        <p>{sale.code}</p>
        <h6>{sale.price}</h6>
        <p>{sale.sale_price}</p>
    </Col>
  )
}

export default Sale
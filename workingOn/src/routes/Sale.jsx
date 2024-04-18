import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const Sale = (props) => {
    const {sale, no, i} = props;
    const navigate = useNavigate();

  return (
    <Col md={3} className='text-center'>
        <img src={sale.imgUrl} width='80%' alt="sale" />
        <h4 style={{fontSize:'1.1rem', fontWeight:'600'}}>{sale.title}</h4>
        <hr />
        <span style={{fontSize:'1rem', fontWeight:'600', textDecoration:'line-through', color:'rgba(0,0,0,0.5'}}>{sale.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
        <p style={{fontSize:'1.2rem', fontWeight:'700'}}>{sale.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
    </Col>
  )
}

export default Sale
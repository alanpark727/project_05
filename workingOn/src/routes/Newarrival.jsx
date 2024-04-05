import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const Newarrival = (props) => {
    const {newItem, no, i} = props;
  return (
    <Container>
        <Row>
            {
                newItem.map((value,i) => 
                <Product newItem={value} key={i} i={i} no={no} />)
            }
        </Row>
    </Container>
  )
}

export default Newarrival
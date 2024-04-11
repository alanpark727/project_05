import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from '../components/Product'

const Worlds = (props) => {
    const {newItem, no, i} = props;
  return (
    <Container>
        <Row>
            {
                newItem.map((value,i) => 
                <Product newItem={value} key={i} i={i} no={no} j={1} />)
            }
        </Row>
    </Container>
  )
}

export default Worlds
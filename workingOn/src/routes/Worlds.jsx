import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from '../components/Product'

const Worlds = (props) => {
    const {newItem, no, i} = props;
  return (
    <Container>
        <h2>T1 2023 WORLDS COLLECTION</h2>
        <p>2023 WORLDS CHAMPION T1</p>
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
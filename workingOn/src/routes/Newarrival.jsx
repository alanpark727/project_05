import React from 'react'
import { Container, Row} from 'react-bootstrap'
import Product from '../components/Product'

const Newarrival = (props) => {
    const {newItem, no, i} = props;
  return (
    <Container>
        <Row>
            {
                newItem.map((value,i) => 
                <Product newItem={value} key={i} i={i} no={no} j={0} />)
            }
        </Row>
    </Container>
  )
}

export default Newarrival
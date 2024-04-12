import React from 'react'
import { Container, Row} from 'react-bootstrap'
import Product from '../components/Product'

const Newarrival = (props) => {
    const {newItem, no, i} = props;
  return (
    <Container>
        <h2>NEW ARRIVAL</h2>
        <p>T1의 신상품을 만나보세요</p>
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
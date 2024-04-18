import React from 'react'
import { Container, Row} from 'react-bootstrap'
import Product from '../components/Product'

const Uniform = (props) => {
    const {newItem, no, i} = props;
    
  return (
    <Container className='mb-5'>
        <h2 className='text-center mt-5'>T1 OFFICIAL UNIFORM</h2>
        <p className='text-center mb-5'>T1 유니폼을 입고 T1의 우승을 응원해주세요!</p>
        <Row>
            {
                newItem.map((value,i) => 
                <Product newItem={value} key={i} i={i} no={no} j={2} k={2} />)
            }
        </Row>
    </Container>
  )
}

export default Uniform
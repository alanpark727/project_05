import React from 'react'
import { Container, Row} from 'react-bootstrap'
import Product from '../components/Product'
import { useParams } from 'react-router-dom'

const Newarrival = (props) => {
    const {newItem, no, i} = props;
    let {id} = useParams()
    let selproduct = newItem.find((x)=>x.id==id);
  return (
    <Container className='mb-5'>
        <h2 className='text-center mt-5'>NEW ARRIVAL</h2>
        <p className='text-center mb-5'>T1의 신상품을 만나보세요</p>
        <Row>
            {
                selproduct.map((value,i) => 
                <Product selproduct={value} key={i} i={i} no={no} j={0} />)
            }
        </Row>
    </Container>
  )
}

export default Newarrival
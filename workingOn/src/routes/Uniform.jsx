import React from 'react'
import { Container, Row} from 'react-bootstrap'
import Product from '../components/Product'
import { useParams } from 'react-router-dom'
import '../scss/Home.scss'

const Uniform = (props) => {
    const {newItem, no, i} = props;
    let {id} = useParams()
    let selproduct = newItem.find((x)=>x.id==id);
  return (
    <Container className='mb-5'>
        <h2 className='text-center mt-5'>T1 OFFICIAL UNIFORM</h2>
        <p className='bar'></p>
        <p className='text-center mb-5' style={{color:'#aaa'}}>T1 유니폼을 입고 T1의 우승을 응원해주세요!</p>
        <Row>
            {
                newItem.map((value,i) => 
                <Product newItem={value} key={i} i={i} no={no} j={2} />)
            }
        </Row>
    </Container>
  )
}

export default Uniform
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { useParams } from 'react-router-dom'
import '../scss/Home.scss'

const Worlds = (props) => {
    const {newItem, no, i} = props;
    let {id} = useParams()
    let selproduct = newItem.find((x)=>x.id==id);
  return (
    <Container className='mb-5'>
        <h2 className='text-center mt-5'>T1 2023 WORLDS COLLECTION</h2>
        <p className='bar'></p>
        <p className='text-center mb-5' style={{color:'#aaa'}}>2023 WORLDS CHAMPION T1</p>
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
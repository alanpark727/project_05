import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Purchase from '../components/Purchase';
import Review from '../components/Review';
import Question from '../components/Question';
import TabContent from '../components/TabContent';


const Detail = (props) => {
    const {newItem} = props;
    let {id} = useParams();
    let [tab, setTab] = useState(0)
  return (
      <Container>

        <Row>
            <Col md={6}>
                <img src={newItem[id].imgUrl} width='100%' alt="" />
            </Col>
            <Col md={6}>
                <h4 className='pt-5'>{newItem[id].title}</h4>
                <Button variant="primary">Add to cart</Button>
            </Col>
        </Row>

        <Nav fill variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
                <Nav.Link onClick={() => { setTab(0) }} eventKey="link-0">상품정보</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => { setTab(1) }} eventKey="link-1">구매정보</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => { setTab(2) }} eventKey="link-2">관련상품</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => { setTab(3) }} eventKey="link-3">상품후기</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => { setTab(4) }} eventKey="link-4">상품문의</Nav.Link>
            </Nav.Item>
        </Nav>
        <TabContent newItem={newItem} id={id} tab={tab} />
      </Container>
      
  )
}

export default Detail
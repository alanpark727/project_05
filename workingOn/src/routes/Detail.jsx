import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TabContent from '../components/TabContent';
import '../scss/Detail.scss';


const Detail = (props) => {
    const {newItem} = props;
    let {id} = useParams();
    let [tab, setTab] = useState(0);
    const [count, setCount] = useState(0);

  return (
      <Container className='detail_wrap'>

        <Row className='detail_product'>
            <Col md={6} className='product_img'>
                <img src={newItem[id].imgUrl} width='85%' alt="product" />
            </Col>
            <Col md={6} className='product_info'>
                <div className='like'>
                    <img src="/img/like_btn_bg_left2.png" alt="" />
                    <button onClick={()=>{count++}}>LIKE <span>0</span></button>
                    <img src="/img/like_btn_bg_right2.png" alt="" />
                </div>
                <h4 className='pt-5'>{newItem[id].title}</h4>
                <h4>{newItem[id].price}원</h4>
                <p>상품코드 {newItem[id].code}</p>
                <div className='d-grid upper_btn'>
                    <Button variant="dark" size='lg'>구매하기</Button>
                </div>
                <Row className='bottom_btn'>
                    <Col md={6} className='d-grid'>
                        <Button variant='light'>장바구니</Button>
                    </Col>
                    <Col md={6} className='d-grid'>
                        <Button variant='light'>관심상품</Button>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Nav fill variant="tabs" defaultActiveKey="link-0" className='detail_tab'>
            <Nav.Item className='detail_tab_item'>
                <Nav.Link onClick={() => { setTab(0) }} eventKey="link-0">상품정보</Nav.Link>
            </Nav.Item>
            <Nav.Item className='detail_tab_item'>
                <Nav.Link onClick={() => { setTab(1) }} eventKey="link-1">구매정보</Nav.Link>
            </Nav.Item>
            <Nav.Item className='detail_tab_item'>
                <Nav.Link onClick={() => { setTab(2) }} eventKey="link-3">상품후기</Nav.Link>
            </Nav.Item>
            <Nav.Item className='detail_tab_item'>
                <Nav.Link onClick={() => { setTab(3) }} eventKey="link-4">상품문의</Nav.Link>
            </Nav.Item>
        </Nav>
        <TabContent newItem={newItem} id={id} tab={tab} />
      </Container>
      
  )
}

export default Detail
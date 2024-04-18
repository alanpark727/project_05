import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TabContent from '../components/TabContent';
import { addItem } from '../store';
import { useDispatch } from 'react-redux'
import '../scss/Detail.scss';


const Detail = (props) => {
    const {newItem} = props;
    let {id} = useParams();
    let [tab, setTab] = useState(0);
    let dispatch = useDispatch()
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState(1);
    let selproduct = newItem.find((x)=>x.id==id);

  return (
      <Container className='detail_wrap'>

        <Row className='detail_product'>
            <Col md={6} className='product_img'>
                <img src={selproduct.imgUrl} width='85%' alt="product" />
            </Col>
            <Col md={6} className='product_info'>
                <div className='like'>
                    <img src="/img/like_btn_bg_left2.png" alt="" />
                    <button onClick={()=>{setCount(count+1)}}>LIKE <span>{count}</span></button>
                    <img src="/img/like_btn_bg_right2.png" alt="" />
                </div>
                <h4 className='pt-5 mb-5'>{selproduct.title}</h4>
                <h4 style={{fontSize:'2rem', fontWeight:'600'}}>{selproduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h4>
                <hr />
                <p>상품코드 {selproduct.code}</p>
                <div className='product-quantity mb-3'>
                    <p>{selproduct.title}
                        <div className='counter'>
                            <span>{quantity}</span>
                            <div>
                                <button onClick={()=>{setQuantity(quantity+1)}}>▲</button>
                                <button onClick={()=>{
                                    if(quantity<=1){
                                        alert('최소 구매수량은 1개 입니다')
                                        setQuantity(1)
                                    } else {
                                    setQuantity(quantity-1)}}}>▼</button>
                            </div>
                        </div>
                    </p>
                </div>
                <h4 className='text-end product-price'><span>TOTAL : </span>{(selproduct.price*quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 <span>&#40;{quantity}개&#41;</span></h4>
                <div className='d-grid upper_btn mt-3'>
                    <Button variant="dark" size='lg'>구매하기</Button>
                </div>
                <Row className='bottom_btn'>
                    <Col md={6} className='d-grid'>
                        <Button variant='light' onClick={()=>{
                            dispatch(addItem({ id: selproduct.id, imgUrl: selproduct.imgUrl, item: selproduct.title, price: selproduct.price, amount: quantity}))
                            alert('장바구니에 상품이 담겼습니다.')
                        }}>장바구니</Button>
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
                <Nav.Link onClick={() => { setTab(2) }} eventKey="link-3">상품후기&#40;0&#41;</Nav.Link>
            </Nav.Item>
            <Nav.Item className='detail_tab_item'>
                <Nav.Link onClick={() => { setTab(3) }} eventKey="link-4">상품문의</Nav.Link>
            </Nav.Item>
        </Nav>
        <TabContent selproduct={selproduct} tab={tab} />
      </Container>
      
  )
}

export default Detail
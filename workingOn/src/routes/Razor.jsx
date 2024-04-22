import React, { useState } from 'react'
import { Container, Row, Col, Button, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { addItem } from '../store';
import { useDispatch } from 'react-redux'
import Purchase from '../components/Purchase'
import Review from '../components/Review'
import Question from '../components/Question'
import '../scss/Razer.scss';

const Razor = () => {
    const [count, setCount] = useState(0)
    const [quantity, setQuantity] = useState(1)
    let [tab, setTab] = useState(0)
    let [id, setId] = useState(0)
    let [isHover, setIsHover] = useState(false)
    let dispatch = useDispatch()
    const navigate = useNavigate()
    const razer = {
        id: 100,
        title: 'Razer DeathAdder V3 Pro Faker Edition',
        imgUrl: "/img/accessaries/razer.jpg",
        code: 'P00000F0',
        price: 249000,
        detailUrl: "/img/accessaries/razer_d.jpg"
    };
    const razerImg = ["/img/accessaries/razer.jpg","/img/accessaries/razer3.png","/img/accessaries/razer4.png"]
  
  return (
    <>
      <Container className='detail_wrap'>

        <Row className='detail_product'>
          <Col md={1} className='product_img'>
            <Nav className='mt-3'>
                <Nav.Item>
                    <img src="/img/accessaries/razer.jpg" width='100%' alt="" onMouseOver={()=>{setIsHover(true); setId(0)}} onMouseOut={()=>{setIsHover(false)}} />
                </Nav.Item>
                <Nav.Item>
                    <img src="/img/accessaries/razer3.png" width='100%' alt="" onMouseOver={()=>{setIsHover(true); setId(1)}} onMouseOut={()=>{setIsHover(false)}} />
                </Nav.Item>
                <Nav.Item>
                    <img src="/img/accessaries/razer4.png" width='100%' alt="" onMouseOver={()=>{setIsHover(true); setId(2)}} onMouseOut={()=>{setIsHover(false)}} />
                </Nav.Item>
            </Nav>
          </Col>
          <Col className='product_img' md={5}>
            <Nav>
                <img src={process.env.PUBLIC_URL + (isHover ? razerImg[id] : [razer.imgUrl])} width='90%' alt="product" />
            </Nav>
          </Col>
          <Col md={6} className='product_info'>
                <div className='like'>
                    <img src="/img/like_btn_bg_left2.png" alt="" />
                    <button onClick={()=>{setCount(count+1)}}>LIKE <span>{count}</span></button>
                    <img src="/img/like_btn_bg_right2.png" alt="" />
                </div>
                <h4 className='pt-5 mb-5'>{razer.title}</h4>
                <h4 style={{fontSize:'2rem', fontWeight:'600'}}>{razer.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h4>
                <hr />
                <p>상품코드 {razer.code}</p>
                <div className='product-quantity mb-3'>
                    <p>{razer.title}
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
                <h4 className='text-end product-price'><span>TOTAL : </span>{(razer.price*quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 <span>&#40;{quantity}개&#41;</span></h4>
                <div className='d-grid upper_btn mt-3'>
                    <Button variant="dark" size='lg' onClick={()=>{
                        dispatch(addItem({ id: razer.id, imgUrl: razer.imgUrl, item: razer.title, price: razer.price, amount: quantity}))
                        if(window.confirm('장바구니에 상품이 담겼습니다. 바로 이동하시겠습니까?')){navigate('/cart')}}}>구매하기</Button>
                </div>
                <Row className='bottom_btn'>
                    <Col md={6} className='d-grid'>
                        <Button variant='light' onClick={()=>{
                            dispatch(addItem({ id: razer.id, imgUrl: razer.imgUrl, item: razer.title, price: razer.price, amount: quantity}))
                            alert('장바구니에 상품이 담겼습니다.')
                        }}>장바구니</Button>
                    </Col>
                    <Col md={6} className='d-grid'>
                        <Button variant='light' onClick={()=>{
                            if(window.confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?')){navigate('/login')}
                        }}>관심상품</Button>
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
        <div style={{padding:'46px 0 0'}}>
            {
                [<div style={{margin:'0 auto',width:'90%'}}>
                    <div style={{margin:'0 auto',width:'90%'}} className='mb-5'><iframe width="100%" height="540vw" src="https://www.youtube.com/embed/Dd2jPGaRX0Q" title="페이커 마우스 궁금한 사람?! 🤚 (ft. 데스에더 V3 프로 | 페이커 에디션 )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><img src={razer.detailUrl} alt="detail" width={'100%'} /></div>,<Purchase />,<Review />,<Question />][tab]
            }
        </div>
      </Container>
    </>
  )
}

export default Razor
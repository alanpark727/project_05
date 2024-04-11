import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../scss/Home.scss';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Product from '../components/Product';
import Sale from '../routes/Sale';
import data4 from '../data_sale';
import axios from 'axios';

const NewArrival = styled.div`
  margin: 100px auto;
  text-align: center;
`
const Collaboration = styled.div`
  margin: 100px auto;
  text-align: center;
`
const Saleitems = styled.div`
  margin: 100px auto;
  text-align: center;
`
const Worlds = styled.div`
  margin: 100px auto;
  text-align: center;
`


const Home = (props) => {
  const {newItem, setNewItem, no, setNo} = props;
  const [sale, setSale] = useState(data4);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/slide1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide7.jpg" alt="" />
        </SwiperSlide>
      </Swiper>

      <NewArrival>
        <h2><span onClick={()=>{navigate('/newarrival/')}}>NEW ARRIVAL</span></h2>
        <p>T1의 신상품을 만나보세요</p>
      </NewArrival>

      <Container>
        <Row>
          {newItem.map((value, i)=>
            <Product newItem={value} key={i} i={i} no={no} j={0} />)
          }
        </Row>
      </Container>

      <Worlds>
        <h2><span onClick={()=>{navigate('/worlds2023/')}}>T1 2023 Worlds Collection</span></h2>
      </Worlds>

      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onClick={()=>{navigate('/worlds2023/')}}
      >
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds01.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds02.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds03.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds04.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds05.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds06.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds07.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds08.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds09.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds10.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds11.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="/img/worlds/worlds12.jpg" alt="" /></a>
        </SwiperSlide>
      </Swiper>

      <div className='uniform'>
        <h2>T1 OFFICIAL UNIFORM</h2>
      </div>


      <Saleitems>
        <h2>SALE</h2>
      </Saleitems>

      <Container>
        <Row>
          {sale.map((value, i) => 
            <Sale sale={value} key={i} no={no} i={i} />)
          }
        </Row>
      </Container>
      
      <div style={{textAlign:'center',margin:'50px auto'}}>
      <Button variant="danger" onClick={()=>{
        if (count===1) {
          axios.get('https://alanpark727.github.io/react_data/sale2.json').then(result => {
            let copy = [...sale, ...result.data];
            setSale(copy);
            setCount(2);
          })
        } else if (count===2) {
          axios.get('https://alanpark727.github.io/react_data/sale3.json').then(result => {
            let copy = [...sale, ...result.data];
            setSale(copy);
            setCount(3);
          })
        } else if (count===3) {
          axios.get('https://alanpark727.github.io/react_data/sale4.json').then(result => {
            let copy = [...sale, ...result.data];
            setSale(copy);
            setCount(4);
          })
        } else if (count===4) {
          axios.get('https://alanpark727.github.io/react_data/sale5.json').then(result => {
            let copy = [...sale, ...result.data];
            setSale(copy);
            setCount(5);
          })
        } else {
          alert('더 이상 상품이 없습니다.');
        }
      }}>+ 더 보기</Button>{' '}</div>

      <Collaboration>
          <h2>COLLABORATION</h2>
          <p>T1의 다양한 콜라보레이션 제품</p>
      </Collaboration>

      <Container>
        <Row>
          <Col md={4}>
            <a href="#none" onClick={()=>{alert("이벤트가 종료되었습니다. 새로운 소식으로 찾아뵙겠습니다.")}}><img src="/img/timeflik.jpg" alt="" width={'100%'} /></a>
            <h3>T1 X TIMEFLIK</h3>
          </Col>
          <Col md={4}>
            <a href="https://secretlabchairs.co.kr/pages/t1?rfsn=3320317.0af73f&utm_campaign=3320317.0af73f&utm_medium=affiliate&utm_source=refersion" target='_blank'><img src="/img/re02.png" alt="" width={'100%'} /></a>
            <h3>T1 X SECRETLAB</h3>
          </Col>
          <Col md={4}>
            <a href='' onClick={()=>{navigate('/collaboration/razer/')}}><img src="/img/razer2.png" alt="" width={'100%'} /></a>
            <h3>FAKER X RAZER</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
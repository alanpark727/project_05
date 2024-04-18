import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { addCount, sortName, minusCount, minusItem } from '../store'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import '../scss/Cart.scss';

const Banner = styled.button`
  background-image: url('/img/banner1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fff;
  border: none;
  width: 100%;
  height: 400px;
`

const Banner2 = styled.button`
  background-image: url('/img/banner2.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fff;
  border: none;
  width: 100%;
  height: 400px;
`

const Cart = () => {
  let cart = useSelector((state) => state.cart)
  let dispatch = useDispatch()
  const navigate = useNavigate();


  return (
    <div className='cart'>
      <Banner />
      <Banner2 />
      <h5 className='mt-5' style={{fontSize:'2rem'}}>장바구니</h5>
      <Table responsive='lg'>
        <thead>
          <tr>
            <th>#</th>
            <th>상품</th>
            <th>상품명</th>
            <th>가격</th>
            <th>수량변경</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((v, i) =>
              <tr key={i} style={{verticalAlign:'middle'}}>
                <td>{v.id}</td>
                <td><img src={v.imgUrl} alt="" width={'80px'}/></td>
                <td>{v.item}</td>
                <td>{(v.price*v.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
                <td>
                <Button size='sm' variant='danger' onClick={() =>
                  dispatch(minusCount(v.id))
                }>-</Button> {v.amount} <Button size='sm' variant='danger' onClick={() =>
                  dispatch(addCount(v.id))
                }>+</Button>
                </td>
                <td><Button size='sm' variant='outline-danger' onClick={()=>{
                  dispatch(minusItem())
                }}>X</Button></td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <Button className='mt-3' variant='outline-danger' onClick={()=>{dispatch(sortName())}}>이름순정렬</Button>{' '}
      <h2 className='mt-5'>총 합계  </h2>
      <p>10만원 이상 무료배송</p>
      <Button className='mt-5 mb-5' variant='danger' onClick={()=>{navigate('/login/')}}>구매하기</Button>
    </div>
  )
}

export default Cart
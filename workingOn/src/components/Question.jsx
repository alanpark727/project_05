import React from 'react'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components';

const QuestionBtn = styled.div`
  float: right;
`
const HitBtn = styled.button`
  width: 34px;
  height: 16px;
  font-size: 10px;
  border: none;
  background-color: #48dc6b;
  color: #fff;
  cursor: auto;
`

const Question = () => {
  return (
    <div>
      <h3>Q & A</h3>
      <QuestionBtn>
        <Button variant='light' className='me-2'>WRITE</Button>
        <Button variant='light'>LIST</Button>
      </QuestionBtn>
      <Table responsive="md">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>공지</td>
            <td>[2023 World Champions T1 Tumbler] 교환 및 환불 안내 <HitBtn>HIT</HitBtn></td>
            <td>T1 Shop</td>
            <td>2024-01-05 11:42:42</td>
          </tr>
          <tr>
            <td>공지</td>
            <td>[T1 SHOP] 월즈 굿즈 교환, 환불 및 주소지 불가 제품 안내 <HitBtn>HIT</HitBtn></td>
            <td>T1 Shop</td>
            <td>2023-11-29 14:44:41</td>
          </tr>
          <tr>
            <td>공지</td>
            <td>텀블러 및 머그컵 용량 내용 <HitBtn>HIT</HitBtn></td>
            <td>T1 Shop</td>
            <td>2023-11-23 15:27:02</td>
          </tr>
          <tr>
            <td>공지</td>
            <td>재입고 예정 안내 <HitBtn>HIT</HitBtn></td>
            <td>T1 Shop</td>
            <td>2023-11-22 12:08:17</td>
          </tr>
          <tr>
            <td>공지</td>
            <td>단순 교환 및 반품 안내 <HitBtn>HIT</HitBtn></td>
            <td>T1 Shop</td>
            <td>2022-03-21 16:15:03</td>
          </tr>
          <tr>
            <td>공지</td>
            <td>[공지사항] T1 SHOP 배송안내 <HitBtn>HIT</HitBtn></td>
            <td>T1 Shop</td>
            <td>2022-02-14 21:08:56</td>
          </tr>
          <tr>
            <td>공지</td>
            <td>[공지사항] 취소/환불 문의는 SHOP@T1.GG 로 메일 부탁드립니다. <HitBtn>HIT</HitBtn></td>
            <td>T1 Shop</td>
            <td>2022-01-12 19:21:31</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Question
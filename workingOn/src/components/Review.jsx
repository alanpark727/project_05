import React from 'react'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components';

const ReviewBtn = styled.div`
  float: right;
`

const Review = () => {
  return (
    <div>
      <h3>REVIEW</h3>
      <ReviewBtn>
        <Button variant='light' className='me-2'>WRITE</Button>
        <Button variant='light'>LIST</Button>
      </ReviewBtn>
      <Table responsive="lg" className='text-center'>
        <tbody>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td style={{padding:'100px 0px'}}>게시물이 없습니다</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Review
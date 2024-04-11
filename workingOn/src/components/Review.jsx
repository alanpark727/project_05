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
        <Button variant='light'>WRITE</Button>
        <Button variant='light'>LIST</Button>
      </ReviewBtn>
      <Table responsive="lg">
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Review
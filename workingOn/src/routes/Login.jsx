import React from 'react'
import styled from 'styled-components'
import { Container, Form, Button, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useRef } from 'react'

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

const Login = () => {
  const [form, setForm] = useState([])
  const idRef = useRef(null)
  const pwRef = useRef(null)


  const chkID = (e)=>{
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
    let email = idRef.current.value.search(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/)

    let pwNum = pwRef.current.value.search(/[0-9]/g)
    let pwEng = pwRef.current.value.search(/[a-z]/ig)
    let pwSpe = pwRef.current.value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi)

    if(email < 0) {
        alert('이메일 형식이 아닙니다.')
        return false;
    } else if(pwRef.current.value(/\s/) != -1) {
        alert('비밀번호는 공백 없이 입력해주세요.')
        return false;
    } else if(pwNum<0 || pwEng<0 || pwSpe<0){
        alert('영문,숫자,특수문자를 혼합하여 입력해주세요.')
        return false;
    } else {
        console.log('통과')
        return true;
    }
  }


  return (
    <Container className='mb-5'>
        <Banner />
        <h2 className='text-center my-5'>로그인</h2>
        <Row xs={2} md={3} style={{justifyContent:'center'}}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' ref={idRef} />
            <Form.Text className="text-muted">
              아이디를 이메일 형식으로 적어주세요.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={pwRef} />
          </Form.Group>
          <div className='text-end'>
            <Button variant="danger" className='me-2' onClick={chkID}>
              로그인
            </Button>
            <Button variant='outline-danger'>
              회원가입
            </Button>
          </div>
    </Form>
    </Row>
    </Container>
  )
}

export default Login
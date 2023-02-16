import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), 
    rgba(255, 255, 255, 0.5)), 
    url("https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/634970c7cbeed5644711b937_62fd57ccd6890f25796f92f9_AdobeStock_295461823.jpeg") center;
      background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({ width: "75%" })};
`
const Title = styled.h3`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: lightblue;
    color: white;
    cursor: pointer;
`


function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>Register for a free account</Title>
                <Form>
                    <Input placeholder='First name'></Input>
                    <Input placeholder='Last name'></Input>
                    <Input placeholder='username'></Input>
                    <Input placeholder='email'></Input>
                    <Input placeholder='password'></Input>
                    <Input placeholder='confirm password'></Input>
                    <Agreement>
                        By creating this new account, I agree to follow Juan on 
                        LinkedIn. Look forward to connecting with you all!
                    </Agreement>
                    <Button>Create Account</Button>
                </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
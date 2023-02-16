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
    width: 25%;
    background-color: white;
    ${mobile({ width: "75%" })};

`
const Title = styled.h3`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: lightblue;
    color: white;
    cursor: pointer;
    margin-bottom: 5px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 15px;
    text-decoration: underline; 
    cursor: pointer;
`

function Login() {
  return (
    <Container>
        
        <Wrapper>
            <Title>Login</Title>
                <Form>
                    <Input placeholder='username'></Input>
                    
                    <Input placeholder='password'></Input>
                  
                    <Button>Login</Button>
                    <Link>Forget password</Link>
                    <Link>Sign up</Link>
                </Form>
        </Wrapper>
    </Container>
  
  )
}

export default Login
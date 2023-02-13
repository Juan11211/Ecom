import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``
function Cart() {
  return (
    <Container>
        <Navbar />
      <Wrapper>
        <Title>Your bag</Title>        
    <Footer />
      
    </Container>
  )
}

export default Cart

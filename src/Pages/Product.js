import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;`

const ImageContainer = styled.div`
    flex: 1; ` 

const Title = styled.h1`
font-weight: 300;`

const Desc = styled.p`
  margin: 20px 0px`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px; 
  `

const Image = styled.img`
  width: 100%; 
  height: 90vh;
  object-fit: cover;`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`

function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>CODE COFFEE</Title>
          <Desc>this is from the latest drop.</Desc>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product

import { Add, Remove } from '@mui/icons-material'
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
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  `

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOptions = styled.option``

const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
   margin: 0px 5px;`

const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    margin: 30px 0px;
    justify-content: space-between;`

const Filter = styled.div`
  display: flex;
  align-items: center;`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;`

const Amount = styled.span``

const Button = styled.button``

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
          <Price>12.99</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
                <FilterColor color='black' />
                <FilterColor color='darkblue' />
                <FilterColor color='gray'/>
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize>
                <FilterSizeOptions>XS</FilterSizeOptions>
                <FilterSizeOptions>S</FilterSizeOptions>
                <FilterSizeOptions>M</FilterSizeOptions>
                <FilterSizeOptions>L</FilterSizeOptions>
                <FilterSizeOptions>XL</FilterSizeOptions>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer></AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
         
          <Button>ADD TO CART</Button> 
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product

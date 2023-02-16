import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from "../responsive";

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}

  `

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  `

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'} 
  background-color: ${(props) => props.type === 'filled' ? 'black' : "transparent"}
  color: ${(props) => props.type === 'filled' && 'white'}`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  `

const TopTexts = styled.div`
${mobile({ display: "none" })}
`

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;`

  const Info = styled.div`
    flex: 3;
    `

  const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;`


  const Product = styled.div`
  display: flex;
  justify-content: space-between;`

  const ProductDetail = styled.div`
  flex: 2;
  display: flex;`
  const Image = styled.img`
  wudth: 200px;`
  const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;`
  const ProductName = styled.span``
  const ProductId = styled.span``
  const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=> props.color}`
  const ProductSize = styled.span``
  const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;`

  const ProductAmountContainer = styled.div`
  display: flex;
  font-weight: 600;
  margin-bottom: 20px;`
  const ProductAmount = styled.div` 
  font-size: 24px;
  font-weight: 200;
  ${mobile({ margin: "5px 15px" })}
  `
  const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}`
  
  const HR = styled.hr`
  border: none;
  background-color: #eee;
  height: 1px;`

  const SummaryTitle = styled.h4`
  font-weight: 200;
  `
  const SummaryItem = styled.div`
  margin: 30px 0px;
  display:flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};`
  const SummaryItemText = styled.span``
  const SummaryItemPrice = styled.span``
  const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;`
function Cart() {
  return (
    <Container>
        <Navbar />
      <Wrapper>
        <Title>Your bag</Title>
        <Top>
          <TopButton>
            Continue Shopping
          </TopButton>
          <TopTexts>
          <TopText>Shopping Bag(2)</TopText>
          <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>
            Checkout Now
          </TopButton>
        </Top>        
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4Y6JeMuYq3AjLdrWWiUgBEh_kfXcTNt0Hw&usqp=CAU' />
                <Details>
                  <ProductName><b>Product</b>CODING SHIRT</ProductName>
                  <ProductId><b>id:</b>12345</ProductId>
                  <ProductColor color='black'/>
                  <ProductSize><b>size:</b>M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                  <ProductPrice>$29.99</ProductPrice>
                </ProductAmountContainer>
              </PriceDetail>
            </Product>
            <HR></HR>
            <Product>
              <ProductDetail>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAbhYKGwIBEB1Awm5qxqejbbCzNDquWucHw&usqp=CAU' />
                <Details>
                  <ProductName><b>Product</b>Coding Sweater</ProductName>
                  <ProductId><b>id:</b>12345</ProductId>
                  <ProductColor color='black'/>
                  <ProductSize><b>size:</b>M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                  <ProductPrice>$29.99</ProductPrice>
                </ProductAmountContainer>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle> Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$55</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$3.75</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$3.75</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText > Total</SummaryItemText>
              <SummaryItemPrice>$55</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout</Button>
          </Summary>
        </Bottom>
        </Wrapper>
    <Footer />
      
    </Container>
  )
}

export default Cart

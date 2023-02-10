import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;

`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center = styled.div`
flex:1;
padding: 20px;
`
const Right = styled.div`
flex:1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;`

const List = styled.ul`
margin: 0px;
padding: 0px;
list-style: none;
flex-wrap: wrap;
display: flex;`


const ListItem = styled.li` 
width: 50%;
margin-bottom: 10px;
`

const SocialContainer = styled.div`
display: flex;`

const SocialIcon = styled.div` 
width: 40px;
height: 40px;
border-radius: 50%;
color: white; 
background-color: ${(props) => props.color};
display: flex;
align-items: center;
margin-right: 20px;
justify-content: center;`

const Desc = styled.p` 
margin: 20px 0px; 
`

const Logo = styled.h1` 

`

const ContactItem = styled.div` 
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`
const Payment = styled.img` 
    width: 100%;

`

function Footer() {
  return (
    <Container>
      <Left>
          <Logo>CODEAPPAREL</Logo>
      <Desc>WOOWOOWOOOWOWOWOWOWW</Desc>
        <SocialContainer>
            <SocialIcon  color='coral'>
                <Facebook />
            </SocialIcon>
            <SocialIcon color='coral'>
                <Instagram />
            </SocialIcon>
            <SocialIcon color='coral'>
                <Twitter />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>Helpful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>WishList</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Home</ListItem>
              <ListItem>WishList</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>My Account</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
              <Room style={{marginRight: "10px"}}/> 123 MIND YO BUSINESS, NEW YORK, NY 10001</ContactItem>
          <ContactItem>
              <Phone style={{marginRight: "10px"}} /> +1 718 555 5555</ContactItem>
          <ContactItem>
              <Mail style={{marginRight: "10px"}} /> contact@codeapparel.com</ContactItem>
              <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
      </Right>
    </Container>
  )
}

export default Footer

import { Favorite, FavoriteBorderOutlined, SearchOutlined, ShoppingCartCheckoutOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Info = styled.div` 
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.2)
    opacity: 0;
    transition: all 0.5s ease;
    `

const Container = styled.div` 
    flex: 1;
    margin: 5x;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: beige;
    position: relative;

    &:hover ${Info}{
      opacity: 1;
    }
    `
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    `
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height:40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition:all 0.5s ease;
  
  &:hover{
    background-color: darkgray;
    transform: scale(1.1)
  }`

const Product = ({ item }) => {
    if (!item || !item.img) {
        return null;
    }

    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
  };
export default Product

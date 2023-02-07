import { Favorite, SearchOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 

    `
function Product({product}) {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
          <Icon>
              <ShoppingCartCheckoutOutlined />
          </Icon>
          <Icon>
              <SearchOutlined />
          </Icon>
          <Icon>
              <Favorite />
          </Icon>
      </Info>
    </Container>
  )
}

export default Product

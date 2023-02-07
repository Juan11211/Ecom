import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'


const Container = styled.div` 

    `

function Products() {
  return (
    <Container>
      {popularProducts.map((product) => (
          <Product product={product} key={product.id} />
      ))}
    </Container>
  )
}

export default Products

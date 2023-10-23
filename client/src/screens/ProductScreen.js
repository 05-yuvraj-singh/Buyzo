import React from 'react'
import { useParams } from 'react-router-dom'
function ProductScreen() {
    const params = useParams();
    const {slug} = params;
  return (
    <div>
      THIS IS A {slug} PRODUCT SCREEN
    </div>
  )
}

export default ProductScreen

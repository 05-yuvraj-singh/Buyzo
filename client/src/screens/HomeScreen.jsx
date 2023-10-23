import React from 'react'

import { Link } from 'react-router-dom';
export default function HomeScreen() {
  return (
    <> 


        <h1>Featured Products</h1>
        <div className="products">

        {
          data.products.map(products =>(
            <div className="product" key={products.slug}>
            <Link to={`/product/${products.slug}`}>

            <img src={products.image} alt ={products.name}></img>
            </Link>
            <div className="product-info">
            <Link to={`/product/${products.slug}`}>
            <p>{products.name}</p>            
            </Link>

            <p><strong>
            ${products.price}

            </strong>
            </p>
            <button>Add to Cart</button>
            </div>
            </div>))
        }
        </div>
        

    </>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import './productcard.css'



const ProductList = ({data}) => {
  console.log(data)
  return (
    <div className="productcard">
        {data.map((item)=>(
            <div>
                <Link to={`/product/${item.intent}/${item.id}`}><img alt='some' src={item.product_image} ></img></Link>
                <Link to={`/product/${item.intent}/${item.id}`}><h1>{item.product_name}</h1></Link>
                <p className="price">{item.product_price}</p>
                <p>{item.product_description}</p>
                <hr/>
            </div>
        ))}
        
        
    </div>
  )
}

export default ProductList
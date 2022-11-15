import React , {useEffect,useState} from 'react'
import {Products} from './products'
import './productcard.css'

const RecommendationScreen = ({intent}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        
        const user = Products.filter((p) => p.intent === intent)
        setData(user)
        console.log(user)
      }, []);
      
  return (
    
    <div className="productcard">
        {data.map((item)=>{
            return (
            <>
                <img src={item.product_image}></img>
                <h1>{item.product_name}</h1>
                <p className="price">{item.product_price}</p>
                <p>{item.product_description}</p>
                <p><button className="myButton">Add to cart</button></p>
            </>
        
            )
        })}
    </div>
  )
}

export default RecommendationScreen
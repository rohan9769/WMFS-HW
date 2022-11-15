import React , {useEffect,useState} from 'react'
import {Products} from './products'
import { useParams } from "react-router-dom";
import './productcard.css'
import RecommendationScreen from './RecommendationScreen';



const ProductScreen = () => {
    const [data, setData] = useState([]);
    const { id,intent } = useParams();
    useEffect(() => {
        const user = Products.find((p) => p.id === parseInt(id) )
        setData(user)
        console.log(user)
      }, []);

  return (
    <div className="productcard">
        <img src={data.product_image}></img>
        <h1>{data.product_name}</h1>
        <p className="price">{data.product_price}</p>
        <p>{data.product_description}</p>
        <p><button className="myButton">Add to cart</button></p>
        <a href='http://localhost:3000/'>Go Back</a>
        <h1>Products you may like</h1>
        <RecommendationScreen intent={intent}></RecommendationScreen>
    </div>
  )
}

export default ProductScreen
import React from 'react'
import { useEffect, useState } from "react";
import "./app.css";
import axios from "axios";
import ProductList from './ProductList';
import logo from './walmartSparkLogo.png'

const HomeScreen = () => {
    const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [isToggled,setIsToggled] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:6500?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
  return (
    <div className="app">
        <img className="wmlogo" alt='logo' src={logo}></img>
        <input
            className="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          /><br></br>
          <button className="myButton" type='button' onClick={()=>setIsToggled(!isToggled)}>Show Results</button>
        <br></br>
        {isToggled && <ProductList data={data}></ProductList>}
        
    </div>
  )
}

export default HomeScreen
import express from "express";
const app = express();
import { Products } from "./data/products.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["product_name", "product_description", "product_price"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(Products).slice(0, 10)) : res.json(Products.slice(0, 15));
});

app.get("/:id",(req,res)=>{
  res.send(req.params.id)
})

app.listen(6500, () => console.log("API is working!"));

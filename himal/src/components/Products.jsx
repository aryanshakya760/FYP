import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Product = () => {
  const [productList, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3005/posts").then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <>
      <h1 className="text-center"> Products</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {productList.map((item, index) => {
            return (
              <ProductCard
                image={item.image} 
                title={item.name}
                description={item.description}
                price= {item.price}
                item={item}
                key={index}
                id = {item.id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Product;

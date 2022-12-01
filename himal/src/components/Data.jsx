import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React, { useState } from "react";

const HOME_GARDEN = 'home and garden';
const UTILITY = 'utility';

export default function Data({ setCart, cart }) {
  const [products] = useState([
    {
      category: UTILITY,
      image: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Product 1",
      cost: 19.99,
    },
    {
        category: HOME_GARDEN,
      image: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Product 2",
      cost: 29.99,
    },
    {
        category: UTILITY,
      image: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Product 3",
      cost: 39.99,
    },
    {
        category: HOME_GARDEN,
      image: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Product 4",
      cost: 49.99,
    },
  ]);

  const addCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(HOME_GARDEN);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };
  return (
    <>
    <h1> Products </h1>
     <p> Select a category</p>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select>
      <div className="products">
        <MDBCard style={{ maxWidth: "22rem" }}>
          {getProductsInCategory().map((product, idc) => (
            <div className="product" key={idc}>
              <div className='bg-image hover-zoom'>
              <MDBCardImage 
                src={product.image}
                position="top"
                alt={product.name}
              />
                </div>
            
              <MDBCardBody>
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <MDBCardTitle>{product.cost}</MDBCardTitle>
                <MDBBtn onClick={() => addCart(product)}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </div>
          ))}
       
      </MDBCard>
      </div>
    </>
  );
}

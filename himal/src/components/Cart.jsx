import React, {useState, useEffect} from "react";
import { useCart } from "react-use-cart";
import img from "./image/logo.jpg";
import axios from "axios";
import { NavLink, useNavigate} from "react-router-dom";


const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const [item, setorder] = useState([]);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const id = item.ProductId;
  if(!localStorage.getItem("accessToken")){
    navigate('/');
    alert("warning! Login to go to Cart Page", "error");

  }
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3005/cart/order`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setProduct(response.data);
        }
      });
    axios
      .get("http://127.0.0.1:3005/posts", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setorder(response.data);
        }
      });
  }, []);

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
  return(
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className=" col-12">
          <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
          <table className="table table-light table-hover m-0"> 
          <tbody>
              {items.map((item, index)=> {
                return(
                <tr key={index}>
                  <td>
                    <img src={`http://127.0.0.1:3005/${item.image}`} style={{height: '6rem'}} alt={img}/>
                  </td>
                  <td>{item.name}</td>
                  <td>Rs. {item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button className="btn btn-info ms-2" 
                    onClick={()=> updateItemQuantity(item.id, item.quantity -1)}>
                   -</button>
                   <button className="btn btn-info ms-2" 
                    onClick={()=> updateItemQuantity(item.id, item.quantity +1)}>
                   +</button>
                   <button className="btn btn-info ms-2" 
                    onClick={()=> removeItem(item.id)}>
                   Remove</button>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: Rs.{cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2"
          onClick={()=> emptyCart()}>
              Clear Cart
          </button>
          <NavLink className="btn btn-outline-dark link-dark ms-2" to="/check">
              Checkout
          </NavLink>
        </div>
      </div>
    </section>
  ) 
};

export default Cart;

import React, { useEffect, useState, useContext } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useCart } from "react-use-cart";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

export default function Checkout() {
  let { id } = useParams();
   const {
    items,
    cartTotal,
  } = useCart();

  let { authState, setAuthState } = useContext(AuthContext);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState("");
  const [showId, setShowInput] = useState("");
  const [singleProduct, setSingleProduct] = useState({});
  const [productList, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3005/posts/byId/${id}`).then((response) => {
     if (response.data.error) {
        alert(response.data.error);
      } else {
        setSingleProduct(response.data);
      }
    }, []);
  })
  
 
    // const [item, setorder] = useState([]);
    // const id = item.ProductId;

      // axios.get(`http://localhost:3005/cart`).then((response) => {
      //   if (response.data.error) {
      //     alert(response.data.error);
      //   } else {
      //     setSingleProduct(response.data);
      //   }
      // });
    const addOrder = async () => {
      const data = {
        address: address,
        email: email,
        description: description,
        UserId: authState.id,
        phone: phone,
        ProductId: singleProduct.id,
        product_name: singleProduct.name,
        total: singleProduct.price,
      };
  
      await axios
        .post("http://127.0.0.1:3005/posts/", data)
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            alert(response.data);
          }
        });
    };
  
  return (
    <div>
      <div className='py-4'>
        <div className='container'>
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header">
                  <h4>Checkout</h4>
                </div>
                  <div className="card-body">
                    <MDBRow className='mb-4'>
                      <MDBCol>
                        <MDBInput id='form6Example1' label='First name' />
                      </MDBCol>
                      <MDBCol>
                        <MDBInput id='form6Example2' label='Last name' />
                      </MDBCol>
                    </MDBRow>
                      <MDBInput onChange={(event) => {
                          setAddress(event.target.value);
                        }} wrapperClass='mb-4' id='form6Example4' label='Address' />
                      <MDBInput onChange={(event) => {
                          setEmail(event.target.value);
                        }}wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
                      <MDBInput  onChange={(event) => {
                          setPhone(event.target.value);
                        }} wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />
                    <NavLink className="btn btn-outline-dark link-dark ms-2" to="/payment">
                      Khalti
                    </NavLink>
                    <NavLink className="btn btn-outline-dark link-dark ms-2" to="/paypal">
                      Paypal
                    </NavLink>
                    <MDBBtn className="btn btn-outline-dark link-dark ms-2"  onClick={() => {
                          addOrder();
                        }}  type="submit">
                      Done
                    </MDBBtn>
                  </div>
              </div>
            </div>
            <div className='col-md-5'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th width="50%">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    
                  </tr>
                </thead>
                <tbody>
                {items.map((item, index) => {
                  return(
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity} </td>
                  </tr>)
                })}
                 <div className="col-auto ms-auto">
                    <h2>Total Price: Rs.{cartTotal}</h2>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
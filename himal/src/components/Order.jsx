import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Order = () => {
  const [order, setOrder] = useState([]);
  const [productlist, setProductlist] = useState([]);
  const id = order.MovieId;
  // get data from API using axois and use effect for auto reload page
  useEffect(() => {
    axios
      .get(`http://localhost:3005/order/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setProductlist(response.data);
        }
      });
    axios
      .get("http://localhost:3005/order/myOrders", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setOrder(response.data);
        }
      });
  }, []);
  return (
    <div className="cart-content " style={{ background: "#18d4ca" }}>
      <section className="py-auto container ">
        <div className="row justify-contetn-center">
          <div className="col-11 col-md-12">
            <h5 className="text-dark"> </h5>{" "}
            <div class="table-responsive">
              <table style={{ color: "dark" }} class="table">
                <thead>
                  <tr>
                    <th scope="col"> Product Name </th>
                    <th scope="col"> Phone Number </th>
                    <th scope="col"> Address </th> <th scope="col"> Price </th>
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  {" "}
                  {order.map((item, index) => {
                    return (
                      <tr>
                        <td> {item.pname} </td> 
                        <td> {item.phone} </td>
                        <td> {item.address} </td>
                        <td> {item.total} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Order;

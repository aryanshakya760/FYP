import React from "react";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import Fade from "react-reveal/Fade";

const ProductCard = (props) => {
  const { addItem } = useCart();

  const notify = () => toast("Added to Cart Successfully");
  return (
    <Fade bottom cascade>
      <div className="menu-card-section  col-11 col-md-6  col-lg-3 mx-0 mb-5" >

      <div className="menu-cards card p-0 overflow-hidden h-100 shadow bg-image hover-zoom" style={{ width: "15rem" }}>
        <img
          className="card-img-top img-fluid"
          src={`http://127.0.0.1:3005/${props.image}`}
          style={{ height: "12rem", width: "100%"}}
          alt="imag" 
        />
        <div className="card-body bg-light">
          <h5 className="card-title text-dark">{props.title}</h5>
          <p className="card-text text-dark">{props.description}</p>
          <h6 className="card-title text-dark"> Rs. {props.price}</h6>
          <button className="btn btn-outline-dark" onClick={()=> notify(addItem(props.item))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </Fade>

  );
};
export default ProductCard;

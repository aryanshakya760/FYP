import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import img from "./image/mendo.jpg";
import { useCart } from "react-use-cart";
// import Fade from "react-reveal/Fade";


const ProductDis = (props) => {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3005/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
      // console.log(response);
    });
  });

    const [productList, setProduct] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3005/posts").then((response) => {
        setProduct(response.data);
      });
    }, []);

  const notify = () => toast("Added To Cart Successfully");
  const { addItem } = useCart();

  // const Product = () => {
  return (
    <div className="postpage">
      <div className="container">
      {/* {productList.map((post, index) => {
        return( */}
          <>
        <img className="card-img-top img-fluid" //src={props.img}
        src={img} style={{ height: "14rem", width: "25%"}} alt="imag" />
        <div className="pname">{postObject.product_name}</div>
          <div className="pdes">{postObject.product_desc}</div>
          <div className="pprice">{postObject.price}</div>
          <div className="right">
            <div className="addCommentContainer">
              <input type="text"></input>
              <button> Add Comment</button>
            </div>
            <div className="ListofComments"></div>
          </div>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={()=> notify(addItem(props.postObject))}
          >
            Add to Cart
          </button>
          </>
        {/* );
       })} */}
      </div>
    </div>
  );
}

export default ProductDis;

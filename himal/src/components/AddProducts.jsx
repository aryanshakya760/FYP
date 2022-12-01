import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { useEffect,useContext } from "react";

export default function AddProducts() {
  let { authState, setAuthState } = useContext(AuthContext);

  const [image, setImage] = useState("");
  const [name, setProductName] = useState("");
  const [description, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:3005/category").then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setCategory(response.data);
      }
    });
  }, []);

  const addProduct = async () => {
    const datas = new FormData();
    datas.append("image", image);
    datas.append("name", name);
    datas.append("description", description);
    datas.append("price", price);
    datas.append("CategoryId", categoryId);

    console.log(addProduct);

    await axios
      .post("http://127.0.0.1:3005/posts", datas)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("Product Added");

          alert(response.data);
          console.log(response.data)
        }
      });
  };
  return (
    <>
      <div className="Order-page">
        <div className="container">
          <div className="order-panel row">
            <div className="Address-detail col-lg-12 col-md-12 col-sm-12">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body ">
                  <h5
                    style={{ color: "red" }}
                    className="card-title  h-4 text-center mb-1  fs-5"
                  >
                    Add Product
                  </h5>
                  <form>
                    <div className="form-floating mb-5">
                      <input
                        onChange={(event) => {
                          setProductName(event.target.value);
                        }}
                        type="text"
                        className="Ordert-input form-control"
                        placeholder="floatingInput"
                      />
                      <label for="floatingInput"> Product Name </label>
                    </div>
                    <div className="form-floating mb-5">
                      <input
                        onChange={(event) => {
                          setProductDescription(event.target.value);
                        }}
                        type="text"
                        className="Ordert-input form-control"
                        placeholder="floatingInput"
                      />
                      <label for="floatingInput"> Description </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        onChange={(event) => {
                          setPrice(event.target.value);
                        }}
                        type="number"
                        className="Ordert-input form-control"
                        placeholder="floatingInput"
                      />
                      <label for="floatingInput"> Price </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        onChange={(event) => {
                          setImage(event.target.files[0]);
                        }}
                        type="file"
                        className="Ordert-input form-control"
                        placeholder="floatingInput"
                      />
                      <label for="floatingInput"> Product Image </label>
                    </div>
                    <div className="form-floating mb-3">
                      <select
                        className="form-control"
                        onChange={(event) => {
                          setCategoryId(event.target.value);
                        }}
                      >
                        <option className=""> Select Product Category </option>;
                        {category.map((value, key) => {
                          return (
                            <option>
                            
                              {value.id} {value.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="d-grid mb-5">
                      <button
                        onClick={() => {
                          addProduct();
                        }}
                        className="btn btn-dark btn-Order-uppercase fw-bold"
                        type="submit"
                      >
                        Add Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

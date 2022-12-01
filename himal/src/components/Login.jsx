import React, {useContext, useState} from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import {Input} from "antd";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authState, setAuthState } = useContext(AuthContext);

  let navigate = useNavigate(); 

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://127.0.0.1:3005/userflex/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      }
      else{
        localStorage.setItem("accessToken", response.data);
        setAuthState({ ...authState, status: true, });
        alert("Welcome to Himal Flex");
        navigate("/posts");
      }
    });
  };

  return (
    <div className="container my-4" style={{background: "#E0E0E0"}}>
      <MDBTypography className="d-flex justify-content-center" variant="h1">
        Login
      </MDBTypography>
      <div className="my-5 d-flex justify-content-center">
        <form className="col-md-5 mx-2 my-4"  >
          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email address"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <MDBInput 
            className="mb-4"
            type="password"
            id="form2Example2"
            label="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
          />

          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox
                id="form2Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
            <MDBCol>
              <a href="#!">Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type="submit" className="mb-4" block onClick={()=>{login();}}> 
            Login
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
            <p>or sign up with:</p>

            <MDBBtn floating className="mx-1">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn> 

            <MDBBtn floating className="mx-1">
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn floating className="mx-1">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating className="mx-1">
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

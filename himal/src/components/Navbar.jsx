import React, { useState, useContext } from "react";
import img from "./image/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useCart } from "react-use-cart";
import { AuthContext } from '../helpers/AuthContext';


export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ ...authState, status: false });
  };
  const { authState } = useContext(AuthContext);
  let { setAuthState } = useContext(AuthContext);

  const [showNavRight, setShowNavRight] = useState(false);
  const {totalItems} = useCart();
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer>
          <MDBNavbarBrand href="/">
            <img src={img} width="140px" height="85px" alt="" xyz />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavRight(!showNavRight)}
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavRight} navbar id="navbarColor02">
            <MDBNavbarNav className="d-flex justify-content-center">
            <MDBNavbarItem>
                <MDBNavbarLink className="link-dark ms-2">
                  <Link to="/">Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="link-dark ms-2">
                  <Link to="/posts">Products</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink className="link-dark">
                  <Link to="/about">About Us</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              {authState.status &&(
                <>
              <MDBNavbarLink>
                <span>
                  <NavLink to="/cart">
                  <MDBIcon fas icon="shopping-cart"> ({totalItems}) </MDBIcon>
                  </NavLink>
                </span>
              </MDBNavbarLink>

              {authState.verify && (
              <>  
              <MDBNavbarItem>
                <MDBNavbarLink className="link-dark">
                  <Link to="/addProduct">Add Product</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
               </>
              )}
              </>
              )}

            </MDBNavbarNav>
            {!authState.status && (
              <>
              <MDBNavbarItem  className="d-flex justify-content-end " >
                <NavLink  className="btn btn-outline-dark" to="/login">
                  Login
                </NavLink>
              </MDBNavbarItem>
              </>
            )}
            {authState.status && (
              <MDBNavbarItem  className="d-flex justify-content-end " >
                <NavLink  onClick={()=> {logout();}} className="btn btn-outline-dark ms-2"  to="/login" >
                <span> {authState.username} </span>
                  Logout
                </NavLink>
              </MDBNavbarItem>
            )}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

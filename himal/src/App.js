import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Products from './components/Products';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import ProductDis from './components/ProductDis';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import { AuthContext } from './helpers/AuthContext';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Checkout from './components/Checkout';
import Khalti from './components/Khalti/Khalti';
import Paypal from './components/Paypal/PayPal';
import Order from './components/Order';
import AddProducts from './components/AddProducts';
import "./index.css";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    email: "",
    id: 0,
    password: "",
    verify: false,
    status: false,
  });

useEffect(() => {
    axios.get("http://127.0.0.1:3005/userflex/authorization", {
            headers: {
              authorization: localStorage.getItem("accessToken"),
            },
        })
        .then((response) => {
            if (response.data.error) {
                setAuthState({...authState, status: false });
            } else {
                setAuthState({
                    username: response.data.username,
                    id: response.data.id,
                    email: response.data.email,
                    password: response.data.password,
                    verify: response.data.verify,
                    status: true,
                });
            }
        });
});
  return (
    <>
    <AuthContext.Provider value={{authState, setAuthState}}>
    <Router>
      <div>
      <ToastContainer position='top-right' autoClose={2000} />

      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        {!authState.status && ( 
        <>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </>
        )} 
        <Route path='/posts' element={<Products/>}/>
        <Route path="/posts/:id" element={<ProductDis />}/>
        {authState.status && (
          <>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/addProduct" element={<AddProducts/>}/>
        </>
        )}
        <Route path='/about' element={<About/>}/>
        <Route path="/check" element={<Checkout/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/payment' element={<Khalti/>}/>
        <Route path='/paypal' element={<Paypal/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
      </CartProvider>
      </div>
    </Router>
    </AuthContext.Provider>
    </>
  );
}

export default App;

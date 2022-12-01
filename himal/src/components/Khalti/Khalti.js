import KhaltiCheckout from "khalti-checkout-web";
import React from 'react'
import config from "./khalticonfig";

export default function Khalti() {
let checkout = new KhaltiCheckout(config);

  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };
  return (
    <div>
        <h2>Khalti Integration</h2>
  
        <button
        onClick={() => checkout.show({ amount: 10000 })}
        style={buttonStyles}
      >
        Pay Via Khalti
      </button>
    </div>
  )
}

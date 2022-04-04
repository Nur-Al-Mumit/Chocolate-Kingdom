import React, { useState } from "react";
import Chocolates from "../Chocolates/Chocolates";
import DisplayPicture from "../DisplayPic/DisplayPicture";
import "./Shop.css"

const Shop = () => {
    const [cart, setCart] = useState([]);
    const addToCart = (data) =>{
        const newCart = [...cart, data];
        setCart(newCart);
    }
    const selectAgain = () => {
      const newCart = [];
      setCart(newCart);
    }
    const selectForMe = () => {
      if (cart.length >= 4){
        const number = Math.floor(Math.random() * 4);
        const newCart = [cart[number]];
        setCart(newCart);
      }
      else{
        alert("Select at last 4");
      }
    }
  return (
    <div className="shop-container">
      <div className="chocolates-card-container">
        <Chocolates onClick={addToCart}></Chocolates>
      </div>
      <div className="order-card">
          <h1>Your Chocolates</h1>
          <div id="ordered-chocolate">
            {
              cart.map(chocolateDisplay => <DisplayPicture key={chocolateDisplay.id} data={chocolateDisplay}></DisplayPicture>)
            }
          </div>
          
          <div>
          <button className="select-btn" onClick={selectForMe}>Select For Me</button><br></br>
          <button className="again-btn" onClick={selectAgain}>Select Again</button>
          </div>
      </div>
    </div>
  );
};

export default Shop;

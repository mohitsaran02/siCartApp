import { Route } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import { useAlert } from "react-alert";
import Popup from "./Popup";
import { render } from "react-dom";
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
import './Popup.css';
import "./Card.css";
import { addItemToCart } from "./cartPage/cart_helper";

const options = {
  position: positions.MIDDLE
};

function Card({ id, name, price, imageUrl, description, category }) {
  const [popup, setPopup] = useState(false);
  // const alert = useAlert();
  
  // useAlert("Your Item has been added to the cart",{title: "Thankou !!"})
  const addItem = () => {
    {getPopUp()}
    
    addItemToCart({ id, name, price, imageUrl, description, category }, () =>
    setPopup(true))
  };

  // const addItem = () => {
  //   addItemToCart(
  //     {
  //       id: data.id,
  //       name: data.title,
  //       price: data.price,
  //       imageUrl: data.img,
  //       description: data.description,
  //       category: data.category,
  //     },
  //     () => {
  //       setPopup(true)
  //       //{getPopUp}
  //     }
  //   );
  // };

  //const duringPopUp = popup ? " during-popup" : ""
  // const duringPopUp = ""
  // {popup && <PopUp setPopup={setPopup}/>}
  
  // const getPopUp = () => {
  //   if (popup) {
  //     return (
  //       <div>
        
  //       <PopUp popup={popup}/>
  //       </div>
  //   )}
  // };
  const getPopUp = () => {
    <Provider template={AlertMUITemplate} {...options}>
        {console.log("popUp")}
        {alert("Your Item has been added to the cart")}
        <Popup />
    </Provider>

  };
  return (
    <div>
      {/* {getPopUp(popup)} */}
      {getPopUp}
      {/* <div className={"Checkout" + duringPopUp}> */}
      <div className={"Checkout"}>
      <div class='container'>
        <div class='card'>
          <Link
            className='link'
            to={`/product/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div class='card-header'>
              <img src={imageUrl} alt='rover' />
            </div>
          </Link>
          <div class='card-body'>
            <span class='tag tag-teal'>{category}</span>
            <h4>{name}</h4>
            <h7>Rs. {price * 10}</h7>
            <p>{description.slice(0, 70)}...</p>
            <div className='add-btn'>
              <button className='add-to-cart-home' onClick={addItem}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Card;

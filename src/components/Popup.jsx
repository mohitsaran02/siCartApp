// import React from 'react';
// // styling
// import './Popup.css';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
// import CartPage from "./cartPage/CartPage";

// const PopUp = (popup, setPopup) => {
//     // function that takes boolean as param to conditionally display popup
//     //var { popup, setPopup } = props 
//     var closeIt = ""
//     var howLong = 5000;
//     var t = null;
//     const closePopup = () => {
//         //t = setTimeout("window.close()",howLong);
//         console.log("I am clicked");
//         this.setPopup(false)
        
//     }


//     const cartP = () => {
//         <Router>
//         <Switch>
//           <Route exact path="/cart">
//             <CartPage />
//           </Route>
//         </Switch>
//       </Router>
//     }

//     return (
//         <div className={"PopUp" + closeIt}>
//             {/* x close window */}
//             <button className= "popup-x" onClick={closePopup}>X</button>
//             <div className="pu-content-container">
//                 <img className="pu-img" src="https://www.freepnglogos.com/uploads/tick-png/tick-mark-symbol-icon-26.png" alt="bone" />
//                 <h1>Added to Cart</h1>
//             </div>
//             {/* button controls */}
//             <div className="pu-button-container">
//                 {/* <button className='pbtn' onClick={()=> setPopup(false)}> SHOP MORE !! </button> */}
//                 <button className='pbtn' 
//                 onClick={cartP.bind(this)}>GO TO CART </button>
//             </div>
//         </div>
//     );
// }

import React, { Fragment } from "react";
import { useAlert } from "react-alert";

const Popup = () => {
    const alert = useAlert();
    return (
      <Fragment>
        <div
          onChange={() => {
            alert.show("Your Item has been added to the cart", {
              title: "Thankou !!",
            });
          }}
        >
        </div>
      </Fragment>
    );
  };

export default Popup;
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import CartPage from "./cartPage/CartPage";
import Popup from "reactjs-popup";
import styled from "styled-components";

import { setUserLogin } from "../redux/auth/AuthSlice";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addItemToCart } from "./cartPage/cart_helper";
const SignInPopUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();


  const getaRedirect = () => {
      return <Redirect to='/cart' />;
  
  };


  // const openCart = () => {
  //   window.open("https://www.google.com","_self")
  // }  

  const signIn = () => {
    auth.signInWithPopup(provider).then((data) => {
      let user = data.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/profile");
      console.log("user", user);
    });
  };
  return (
    <StyledPopup
      trigger={
        <div>
          {/* <button className='signin button animate__heartBeat'> Sign In </button> */}
        <img className='cartIcon' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-cart-71-543136.png" height="30" width="35" 
        onClick={getaRedirect}></img>
           {/* onClick={openCart}
          onClick={<Route exact path='/cart'><CartPage /></Route>}
           onClick={
           <Router>
             <Switch>
               <Route exact path="/cart">
                 <CartPage />
               </Route>
             </Switch>
           </Router>
           }> */}
             
           {/* </img> */}
        </div>           
          
      }
      // modal
      // closeOnDocumentClick
    >
      {/* <div className='card'>
        <div className='content'>welcome to Sicart</div>
        <button className='btn-rounded' onClick={signIn}>
          <div className='img1'>
            {" "}
            <img src='https://img.icons8.com/color/48/000000/google-logo.png' />
          </div>
          <div className='titles'>Sign In with Google</div>
        </button>
      </div> */}
    </StyledPopup>
  );
};

export default SignInPopUp;
const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    /* ...; 
    display: none;*/
    display: none;
    /* background-color: transparent; */
  }
  // use your custom style for ".popup-content"
  &-content {
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    /* ...; */
    /* width: 100%; */
    padding: 5em;
    display: none;
    .card {
      display: none;
      width: 100%;
      margin: auto;
      padding: 3em;
      background-color: #cad5e2;
      diplay: none;
    }
    .btn-rounded {
      display: flex;
      flex-direction: row;
      background-color: white;
      color: black;
      text-align: center;
      border: 5px solid green;
      border-radius: 25px;
      width: 90%;
      letter-spacing: 1.3px;
      outline: none;
      border: none;
      /* height: 100%; */
      cursor: pointer;
      /* height: 3em; */
      align-items: center;
      margin-left: 5%;
      margin-top: 5%;
      padding: 5px;
      opacity: 0.9;
    }

    .btn-rounded > * {
      margin: 5px 0;
    }

    .img1 {
      height: 2rem;
      width: 2rem;
    }
    .content {
      padding: 2em;
      width: 100%;
      text-align: center;
      font-size: 1.4em;
      font-weight: 600;
    }
  }
`;
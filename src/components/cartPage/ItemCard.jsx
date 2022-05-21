import React, { useState } from 'react'
//import { counter } from '../ProductPage';
import { removeItemFromCart } from "./cart_helper";

function ItemCard(props) {
  console.log("Cart item", props);
  const {count, setCount, totalamnt, setTotal} = props;
  const { id, name, price, imageUrl } = props.product;
  const { setreload = (f) => f, reload = undefined } = props;
  let Aprice = price * 10;
  //const [count, setCount] = useState(1);
  const removeItem = () => {
    removeItemFromCart(id);
    setreload(!reload);
  };
  return (
    <div>
      <div className='itmdetMoh'>
        <img class='imgMoh' src={imageUrl} alt='' width='150' height='150' />
        <span className='dataMoh'>
          <span className='descMoh'>{name}</span>

          <div className='quantMoh'>
              <button 
                  className='minus qbt'
                  onClick={() => {

                    count>=2?setCount(count-1):setCount(1);
                    setTotal(Aprice*count);
                    console.log(count);
                  }}>-</button>
                  {count}
              <button 
                  className='plus qbt'
                  onClick={() => {
                    setCount(count+1);
                    setTotal(Aprice*count)
                    console.log(count);
                  }}
                  >+</button>
          </div>
          <span className='data itPriceMoh'>Rs. {Aprice*count}/-</span>
              
            
        </span>
      </div>
          <button id='trashMoh' onClick={removeItem}>
          <i className='fa fa-trash'></i>
          </button>
      <hr className='line1Moh'></hr>
    </div>
  );
}

export default ItemCard

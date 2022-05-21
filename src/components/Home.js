import React from "react";
import { useAlert } from "react-alert";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import Slider from "./Slider";
import { Fragment, useState } from "react";
//import{popup, setPopup} from "./Card";
import PopUp from "./Popup";
import "./Popup.css";
import DATA from "../data/productData";
import Card from "./Card";



const Home = () => {
  const [popup, setPopup] = useState(false);
  console.log("home");
  console.log(DATA[0].items);
  
  const duringPopUp = popup ? " during-popup" : ""
  {popup && <PopUp popup={popup} setPopup={setPopup}/>}

  // const itemAdd = () => {
  //   Alert("item added");
  // }


  // const getPopUp = () => {
  //   if (popup) {
  //     return (
  //       <div>
    
  //         <PopUp popup={popup} setPopup={setPopup}/>
  //       </div>
  
// )}






  return (
    <>
      <Container>
        <NavigationBar></NavigationBar>
        <Slider></Slider>
      </Container>

      {/* Cards */}

      {/* {getPopUp(popup)} */}
      
      <div className={"Checkout" + duringPopUp}></div>
      <ContainerGrid>
        <div className='grid justify-content-center'>
          {DATA[0].items.map((item) => {
            return (
              <Card

                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                description={item.description}
                category={DATA[0].routeName} 
              />
            );
          })}
        </div>
      </ContainerGrid>
    </>
  );
};

export default Home;
const Container = styled.div``;
const ContainerGrid = styled.div`
  padding: 3em;
`;
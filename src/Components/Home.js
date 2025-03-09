import React from "react";
import CreditCardComp from "./CreditCardComp";

const Home = () => {
  return (
    <div className="Container">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      
      <CreditCardComp/>
    </div>
  );
};

export default Home;

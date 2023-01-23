import React from "react";
import Budgetbase from "./Budgetbase";

import Navbar from "./Navbar";
export default function Home() {
  return (
    <div className="home-container ">
      <Navbar></Navbar>
      <div className="home text-form-container">
        <h2 className="main-heading">
          {" "}
          A new low-rate balance <br></br> transfer -{" "}
          <span className="active-link">built for you!</span>
        </h2>
        <p className="main-content">
          Fast approvals. No credit check to apply.
          <br></br>
          <span className="main-content-span">
            2 minutes to sign up. It’s easy!
          </span>
        </p>
        <form action="">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="inputbox"
          />

          <button className="signupbutton mt-3">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

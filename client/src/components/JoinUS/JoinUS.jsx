import React from "react";
import Stepper from "./Stepper";
import "./JoinUS.css";
import RestaurantInfo from "./RestaruantInfo/RestaurantInfo";
import NavbarDouble from "../navbar/NavbarDouble";

export default function JoinUS() {
  const list = [
    { component: <Example1 />, label: "Step 1: Restaurant Information" },
    { component: <Example2 />, label: "Step 2: Restaurant Documents" },
    { component: <Example3 />, label: "Step 3: Menu Setup" },
    { component: <Example4 />, label: "Step 4: Partner Contact" },
    { component: <Example5 />, label: "Step 5: Preview" },
  ];
  return (
    <>
      <div className="nav-double join-us-body">
        <NavbarDouble />
      </div>
      <div className="Home">
        <div className="JoinUS">
          <Stepper list={list} />
        </div>
      </div>
    </>
  );
}

const Example1 = ({ onPrev, onNext }) => {
  return (
    <div className="container2">
      <h1>RESTAURANT INFORMATION</h1>
      <p>Location, Owner details, Open & closing time</p>
      <div>
        <RestaurantInfo />
        <button onClick={onPrev} className="step-btn-prev">
          Prev
        </button>
        <button onClick={onNext} className="step-btn">
          Next
        </button>
      </div>
    </div>
  );
};

const Example2 = ({ onPrev, onNext }) => {
  return (
    <div className="container2">
      <h1>Restaurant Documents</h1>
      <div>
        <button onClick={onPrev} className="step-btn-prev">
          Prev
        </button>
        <button onClick={onNext} className="step-btn">
          Next
        </button>
      </div>
    </div>
  );
};

const Example3 = ({ onPrev, onNext }) => {
  return (
    <div className="container2">
      <h1>Menu Setup</h1>
      <div>
        <button onClick={onPrev} className="step-btn-prev">
          Prev
        </button>
        <button onClick={onNext} className="step-btn">
          Next
        </button>
      </div>
    </div>
  );
};

const Example4 = ({ onPrev, onNext }) => {
  return (
    <div className="container2">
      <h1>Partner Contact</h1>
      <div>
        <button onClick={onPrev} className="step-btn-prev">
          Prev
        </button>
        <button onClick={onNext} className="step-btn">
          Next
        </button>
      </div>
    </div>
  );
};

const Example5 = ({ onPrev, onNext }) => {
  return (
    <div className="container2">
      <h1>Preview</h1>
      <div>
        <button onClick={onPrev} className="step-btn-prev">
          Prev
        </button>
        <button onClick={onNext} className="step-btn">
          Finish
        </button>
      </div>
    </div>
  );
};

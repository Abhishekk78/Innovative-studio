import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/Home.css";
import Card from "../Component/Card";
function Home() {
  const handleGetInTouch = () => {
    toast.success("Get in touch", {
      position: "top-right",
      autoClose: 900,
    });
  };

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">Welcome to innovative studio </h1>
          <h1 className="hero-subtext mt-3">
            Your success starts here. Let's achive gretness together
          </h1>
          <button className="btn btn-danger mt-3" onClick={handleGetInTouch}>
            Get in touch
          </button>
        </div>
        <ToastContainer />
      </div>
      <h1>Project Showcase</h1>
      <div className="project-showcase mt-5 ">
        <Card />
      </div>
    </>
  );
}

export default Home;

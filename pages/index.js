import React from "react";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <header className="header">
        <div className="brand_box"></div>
        <div className="text_box">
          <h1 className="heading_primary">
            <span className="heading_primary_main">
              <span style={{ color: "#0097e6", fontSize: "50px" }}>
                Welcome
              </span>{" "}
              To The World Of NextJS
            </span>{" "}
            <br />
            <span>Love With JavaScript</span>
          </h1>{" "}
          <br /> <br />
          <a href="#" className="btn btn_white btn_animated">
            Read More
          </a>
        </div>
      </header>
    </>
  );
};

export default index;

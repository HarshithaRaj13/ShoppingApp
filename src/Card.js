import React from "react";
import "./App.css";

export const Card = () => {
  return (
    <div className="card-container">
      <img src="https://picsum.photos/300/200" alt="card image" />
      {/*  // took this link from lorem picsum ,
      it provides the link to access different pictures */}
      <h1 className="Card-title">Card Title</h1>
      <p className="card-description">
        <b>
          This is the card description .You can add more details about the card{" "}
        </b>
      </p>
      <a href="CardPage" id="card-btn">
        Learn more
      </a>
    </div>
  );
};
export default Card;

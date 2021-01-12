import React from "react";
import "./style.css";

function EmpCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
          <li>
            <strong>Years Working:</strong> {props.location}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default EmpCard;

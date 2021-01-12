import React from "react";

function AgeButton(props) {
  return (
    <button onClick={props.sortByAge} type="button" className="btn btn-dark btn-lg">Sort by Age</button>
  );
}

export default AgeButton;
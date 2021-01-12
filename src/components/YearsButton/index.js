import React from "react";

function YearsButton(props) {
  return (
    <button onClick={props.sortByYears} type="button" className="btn btn-dark btn-lg">Sort by Years</button>
  );
}

export default YearsButton;
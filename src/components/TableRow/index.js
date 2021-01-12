import React from "react";

const TableRow = props => {
  return (
    
    
      
      <tr>
          
      <td className="img-container col-md-2">
        <img alt={props.name} src={props.image} />
      </td>
        <td className ="col-md-2">{props.first}</td> 
        <td className="col-md-2">{props.last}</td> 
        <td className="col-md-2">{props.age}</td> 
      </tr>
      
  
  );
}

export default TableRow;
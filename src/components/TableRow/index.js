import React from "react";

const TableRow = props => {
  return (
    
    
      
      <tr>
          
      <td className="">
        <img alt={props.name} src={props.image} />
      </td>
        <td className ="">{props.first}</td> 
        <td className="">{props.last}</td> 
        <td className="">{props.age}</td> 
      </tr>
      
  
  );
}

export default TableRow;
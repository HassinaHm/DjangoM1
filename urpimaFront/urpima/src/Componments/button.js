import '../App.css'
import React from 'react'; 

const button = (props) => { 
  
  return ( 
    
    <button className="AddButton" onClick={props.onClick}>{props.text}</button>
  ); 
  
} 

export default button ;
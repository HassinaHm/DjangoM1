import React from 'react'
//import { Button, Form } from 'react-bootstrap'
import http from '../http'
import {useState} from 'react'

function TeamCreate() {
    const [inputs , setInputs]=useState({});

     const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    //const handleChange = (event)=>{
     // setImage( event.target.files[0]);
      
   // }

    const submitForm = (e)=>{
        e.preventDefault();

        http.post('/Createteam',inputs).then((res)=>{
          console.log(res);
        })
      }


  return (
      <div>
    <div>TeamCreate</div>
   
     <label>Nom:</label><input type="text" name ="nom"  value={inputs.nom|| ''} onChange={handleChange} /><br></br>
     <label>Image:</label><input type="file" name ="image"  value={inputs.image|| ''} onChange={handleChange}  required/><br></br>
     <label>Email:</label><input type="email"  name ="email"  value={inputs.email || ''}  onChange={handleChange}  required/><br></br>
     <label>Description:</label><input type="text" name ="description"   value={inputs.description || ''} onChange={handleChange}  required /><br></br>
       
       <button type="submit" onClick={submitForm}>Envoyer</button>
    </div>
  )
}

export default TeamCreate
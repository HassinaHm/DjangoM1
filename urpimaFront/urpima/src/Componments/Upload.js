import React from 'react'
import {useEffect , useState} from "react";
import http from './http'


export default function Upload () {
   
    const [image , setImage ]=useState('');

    const handleChange = (event)=>{
      setImage( event.target.files[0]);
      
    }

    const submitForm = (e)=>{
      e.preventDefault();
      const data = new FormData();
      data.append('image',image);
    
      http.post('/upload',data).then((res)=>{
        console.log(res);
      })
    }
    
    return (
      <div>
      <div> 
      <form onSubmit={submitForm}  encType='multipart/form-data'> 
         <input type="file" name="image"  onChange={handleChange}   />
         <button className='btn btn-success mt-3'  onClick={submitForm}  type="submit">upload</button>
    </form>
    
    </div>

    </div>
    )
  }







import React from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import RouterApp from './Componments/Pages/RouterApp';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
       <RouterApp/>
     </BrowserRouter>
   
    </div>
  );
}

export default App;

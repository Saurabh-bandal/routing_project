import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Comonents/Nav";
import About from "./Comonents/About";
import Product from "./Comonents/Product";
import Home1 from "./Comonents/Home1";
import Services from "./Comonents/Services"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
   <BrowserRouter>
        
       <Nav/>

       <Routes>
        <Route path="*" element={<Home1/>}/>
        <Route path="Home1" element={<Home1/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Product" element={<Product/>}/>
        <Route path="Services" element={<Services/>}/>

       </Routes>

   </BrowserRouter>
     
  );
}

export default App;

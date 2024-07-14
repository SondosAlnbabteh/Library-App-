import React from 'react';
import ReactDOM from 'react-dom';
import About from './about.js'; // تأكد من صحة المسار
import Home from './home.js';
import Contact from './contact ';
import Header from './header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from './sign-up.js';
import Footer from './footer.js';
import Books from './books.js';
import "./index.js";

function App(){
  return(
 
      <BrowserRouter>
    <div className='App'>
      <Header/>
      <div>
        <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/books' element={<Books/>}/>

              <Route path='/sign-up' element={<Sign/> }/> 
        </Routes> 
      </div>
      <Footer/>
    </div> 
      </BrowserRouter>

    
  );
}

export default App;



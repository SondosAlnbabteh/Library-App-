import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'; // تأكد من صحة المسار
import Footer from './footer'; // تأكد من صحة المسار
import Cards from './cards';


function App(){
  return(
    <div className='App'>
       <Header />
       <Cards />
       <Footer/>
    </div>

  );
}

export default App;



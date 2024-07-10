import Cards from './cards';
import "./cards.css";
import { useState } from 'react';



function Home(){
  const [name,setName] = useState(sessionStorage.getItem("name"));

  return(
    <div className='App'>
      {name ? <h1>welcome {name}</h1> : <h1>welcome</h1>}
    
       <Cards />
    
    </div>

  );
}

export default Home;
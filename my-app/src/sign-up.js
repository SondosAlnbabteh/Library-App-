import "./sign-up.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Sign(){
  const [name, setName] = useState('');
 
  const navigate = useNavigate();



  const handleSubmission = e => {
    e.preventDefault();
   
    sessionStorage.setItem("name", name);
    console.log(name);
    window.dispatchEvent(new Event("storage"));
    navigate('/');
  }

 

 

    return(
       <div>
       
       <div className="container">
	<div className="screen">
		<div className="screen__content">

			<form className="login" onSubmit={handleSubmission}>
				<div className="login__field">
					<i className="login__icon"><FontAwesomeIcon icon={faUser}/></i>
					<input type="text" className="login__input" onChange={(e)=>setName(e.target.value)} placeholder="User name "/>
				</div>
				<div className="login__field">
					<i className="login__icon"><FontAwesomeIcon icon={faLock}/></i>
					<input type="password" className="login__input" placeholder="Password"/>
				</div>
				<button className="button login__submit" type="submit">
					<span className="button__text">Log In Now</span>
					<FontAwesomeIcon icon={faChevronRight}/>
				</button>				
			</form>

					</div>
          <div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>
          </div>
	
</div>
      
       </div>
    );
}

export default Sign;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./footer.css";

function Footer() {
    return (
      <footer class="footer-distributed">
      
      <div class="contact">
     
       
       <p>Contact</p>
      </div>

      <div>
        <FontAwesomeIcon icon={faLocationDot} />
        <i class="fa-solid fa-location-dot"></i>
        <p>Zarqa Jordan</p>
      </div>

      <div>
      <FontAwesomeIcon icon={faPhone} />
        <p>+962 786 114 062</p>
      </div>
      
      <div>
      <FontAwesomeIcon icon={faEnvelope} />
        <p>salehSondos135@gmail.com</p>
      </div>

      <div>
       <p>Copyright © 2024 SondosAlnbabteh.<p> rights reserved.</p></p>
     </div>
  
 </footer>
    );
}

  export default Footer;
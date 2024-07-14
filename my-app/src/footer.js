import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
      <footer className="flex flex-col items-center p-10 space-y-4 text-white bg-blue-800 footer-distributed">
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faLocationDot} className="text-white" />
        <p>Zarqa Jordan</p>
      </div>

      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faPhone} className="text-white" />
        <p>+962 786 114 062</p>
      </div>

      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faEnvelope} className="text-white" />
        <p>salehSondos135@gmail.com</p>
      </div>

      <div className="text-center">
        <p>Copyright © 2024 SondosAlnbabteh.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
    );
}

  export default Footer;
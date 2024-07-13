import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function Header() {
    const [name, setName] = useState(null);

    useEffect(() => {
        const handleStorageChange = () => {
            setName(sessionStorage.getItem("name"));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem("name");
        setName(null);
        window.location.reload();
    };

    return (
        <header className="header">
            <img src="https://st2.depositphotos.com/1364916/6359/v/450/depositphotos_63590137-stock-illustration-blue-book-logo-vector.jpg" alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact </Link></li>
                    <li><Link to="/books">Books </Link></li>

                    {sessionStorage.getItem("name")  ? 
                     <li><Link to="/" onClick={handleLogout}> <FontAwesomeIcon icon={faRightToBracket} /> logout </Link></li> : <li><Link to="/sign-up"> <FontAwesomeIcon icon={faUserPlus} /> login </Link></li>  }
                   
                </ul>    
            
            </nav>
        </header>
    );
}

  export default Header;
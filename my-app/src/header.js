import { Link } from 'react-router-dom';

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
        <header className="flex justify-between items-center p-4 bg-blue-800">
      <img src="https://st2.depositphotos.com/1364916/6359/v/450/depositphotos_63590137-stock-illustration-blue-book-logo-vector.jpg" alt="Company Logo" className="h-12 rounded-full" />
      <nav>
        <ul className="flex gap-8 m-0 p-0 list-none">
          <li className="m-4 mr-16">
            <Link to="/" className="text-white no-underline text-base transition-colors duration-300 hover:text-gray-300 hover:border-b-2 border-pink-800">Home</Link>
          </li>
          <li className="m-4 mr-16">
            <Link to="/about" className="text-white no-underline text-base transition-colors duration-300 hover:text-gray-300 hover:border-b-2 border-pink-800">About</Link>
          </li>
          <li className="m-4 mr-16">
            <Link to="/contact" className="text-white no-underline text-base transition-colors duration-300 hover:text-gray-300 hover:border-b-2 border-pink-800">Contact</Link>
          </li>
          <li className="m-4 mr-16">
            <Link to="/books" className="text-white no-underline text-base transition-colors duration-300 hover:text-gray-300 hover:border-b-2 border-pink-800">Books</Link>
          </li>
          {sessionStorage.getItem("name") ? (
            <li className="m-4 mr-16">
              <Link to="/" onClick={handleLogout} className="text-white no-underline text-base transition-colors duration-300 hover:text-gray-300 hover:border-b-2 border-pink-800">
                <FontAwesomeIcon icon={faRightToBracket} /> Logout
              </Link>
            </li>
          ) : (
            <li className="m-4 mr-16">
              <Link to="/sign-up" className="text-white no-underline text-base transition-colors duration-300 hover:text-gray-300 hover:border-b-2 border-pink-800">
                <FontAwesomeIcon icon={faUserPlus} /> Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
    );
}

  export default Header;
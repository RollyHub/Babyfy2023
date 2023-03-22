import React from 'react'
import './Header.css'
import logo from "./Pictuers/Pink and Purple Minimalist Baby and Toys Logo .png" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./StateProvider";
import {Link} from "react-router-dom";
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

    return (
      <div className="header">
        <Link to="/">
       <div className="logo">
          <img src={logo} width="100" height="70" />
        </div>
        </Link>
        
        <div className="header__search">
            <input
            className="header__searchInput" 
            type="text" />
            <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass}></FontAwesomeIcon>
           
            </div>
        
        <div className="header__nav">
          <Link to ={!user && '/login'}>
          <div onClick={handleAuthenticaton}
           className="header__option">
          <span className="header__optionLineOne
            ">Guest
            </span>
            <span className="header__optionLine">{user ? 
            'Sign Out' : 'Sigh In'}
            </span>
          </div>
          </Link>

        <div className="header__option">
        <span className="header__optionLineOne
            ">Your
            </span>
            <span className="header__optionLine
            ">Orders
            </span>
          </div>

          <div className="header__option">
          <span className="header__optionLine
            ">Register
            </span>
            <span className="header__optionLine
            ">Now
            </span>
        </div>

        <Link to="/checkout">
        <div className="header__optionBasket">
        <span><FontAwesomeIcon className="basket__opt header__basketCount" 
        icon={faCartShopping}></FontAwesomeIcon>{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header
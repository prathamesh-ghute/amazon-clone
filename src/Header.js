
// use rfce to create basic component -shortcut
import React from 'react';
import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() { 

    // const [state, dispatch] = useStateValue();
  // const [{basket, user}] = useStateValue();
const [{ basket ,user}] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
              auth.signOut();
          }
          }

  return (
    <div className='header'>
          <Link to="/">
          <img className="header_logo" src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png" alt="Amazon Logo" 
          />
          </Link>
        
            <div className='header_search'>
                <input 
                className='header_searchInput'
                type='text'
                />
                <SearchIcon className="header_searchIcon"/>           
              </div> 

            <div className='header_nav'>
              <Link to= {!user && "/login"} className="header_loginLink">
              <div onClick={handleAuthentication} className='header_option'>
                <span className='header_optionLineOne'>Hello {!user ? "Guest" :user?.email}</span>
                <span className='header_optionLineTwo'>{user ? "Sign Out" : "Sign In"}</span>
              </div>
              </Link>

              <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
              </div>

              <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
              </div>

              {/* this is use to link the particular page based on icons or something text */}
              <Link to="/checkout">
                <div className='header_optionBasket'>
                        <ShoppingCartIcon  className='header_cartIcon'/>
                    <span className='header_optionLineTwo header_basketCount'>
                      {basket?.length} 
                    </span>
                </div>
              </Link>
            </div>
        </div>
  )
}

export default Header

import React from 'react';
import logo from '../Images/logo.png';
import { CiUser } from "react-icons/ci";

const Navbar = ({ details, registernum }) => {
  console.log('Registernum in Navbar:', registernum);
  return ( 
    <div className="navbar font-MyFont text-black flex justify-between items-center p-14">
        <div className="img ">
          <a href="/landing"><img src={logo} alt="img" /></a>
        </div>
        <div className='flex text-xl text-nowrap'>
          {details && <div className='px-10'><a href="/signin">Login</a></div>}
          {!details && 
            <div className='px-10 flex items-center'>
              <div className='px-2'><CiUser size={20}/></div>
              <div>22BCT0075</div>
            </div>
          }
          <div className='px-10'><a href="/aboutus">About Us</a></div>
          <div className='px-10'><a href="/contact">Contact Us</a></div>
        </div>
    </div>
  );
}
 
export default Navbar;

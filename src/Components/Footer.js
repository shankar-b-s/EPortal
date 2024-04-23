import React from 'react';
import git from '../Images/git.png';
import li from '../Images/li.png';
import ig from '../Images/ig.png';

const Footer = () => {
  return (
    <footer className='bg-[#4167ED] text-white flex flex-col justify-center align-middle p-16 rounded-t-2xl'>
       <div>
          <ul className="links flex justify-center items-center p-5">
            <li className='px-2'><a href='/landing'>Home</a></li>
            <li className='px-2'><a href='/aboutus'>About</a></li>
            <li className='px-2'><a href='/aboutc'>Team</a></li>
            <li className='px-2'><a href='/contact'>Contact</a></li>
          </ul>
       </div>
       <div>
          <ul className='flex justify-center items-center'>
            <li className='px-4 size-14'><a href="https://github.com/shankar-b-s/EPortal.git"><img src={git} alt="img" /></a></li>
            <li className='px-4 size-14'><a href="https://www.linkedin.com/in/shankar-bs"><img src={li} alt="img" /></a></li>
            <li className='px-4 size-14'><a href="https://www.instagram.com/atharva_a_v/"><img src={ig} alt="img" /></a></li>
          </ul>
        </div>
        <p className="legal text-center">© 2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;

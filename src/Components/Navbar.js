import logo from '../Images/logo.png';
const Navbar = () => {
  const details = true;
  return ( 
    <div className="navbar font-MyFont text-black flex justify-between items-center p-14">
        <div className="img ">
          <a href="/"><img src={logo} alt="img" /></a>
        </div>
        <div className='flex text-xl text-nowrap'>
          <div className='px-10'><a href="/signin">Login</a></div>
          <div className='px-10'><a href="/aboutus">About Us</a></div>
          <div className='px-10'><a href="/">Contact Us</a></div>
        </div>
    </div>
   );
}
 
export default Navbar;
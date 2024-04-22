import logo from '../Images/logo.png';
import { IoMdHome } from "react-icons/io";
const Backhomenav = () => {
  return ( 
    <div className="flex justify-between items-center w-screen px-14">
              <div><a href="/landing"><img src={logo} alt="img" /></a></div>
              <div className='px-4 py-4 rounded-lg text-white bg-[#4167ED]'><a href="/landing"><IoMdHome size={40}/></a></div>
    </div>
   );
}
 
export default Backhomenav;
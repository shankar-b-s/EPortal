import logo from '../Images/logo.png'
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import data from './data.json';
const Eventsnav = () => {
  const items = data['itemvals'];
  return ( 
    <div className="eventsnav flex flex-col font-MyFont">
      <div className='flex items-center justify-between p-10'>
        <div>
          <a href="/"><img src={logo} alt="img" /></a>
        </div>
        <div>
          <div className='flex items-center py-3 px-4 border-2 border-black rounded-lg'>
            <div className='px-1'><IoIosSearch size={20}/></div>
            <input type="search" name="search-form" id="search-form" className="search-input focus: outline-0"  placeholder="Search events"/>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='p-10 text-4xl'><p>EVENTS AROUND YOU</p></div>
        <div><button className='hover:bg-white hover:text-black hover:border-2 hover:border-black bg-[#4167ED] text-white font-semibold px-4 py-4 rounded-lg  mr-36 '>
          <div className='flex items-center'>
            <div className='pr-2'><FaPlus size={20} /></div>
            <div><a href="/adminlogin">ADD EVENT</a></div>
          </div>
        </button></div>
      </div>
    </div>
   );
}
 
export default Eventsnav;
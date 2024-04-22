import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { GoOrganization } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import logo from '../Images/logo.png';
import Footer from "./Footer";
const Eventdisp = ({data}) => {
  const items = data["itemvals"];
  return ( 
    <div>
      {items.map((items)=>(
          <div className="eventsmain flex justify-between border-2 border-black rounded-xl  m-10 font-MyFont">
            <div className="flex justify-evenly items-center">
              <div className="p-16"><img src={logo} alt="" /></div>
              <div className="flex flex-col p-12 text-xl pl-96">
                <div className="py-2">{items.eventname}</div>
                <div className="flex items-center py-2">
                  <div className="pr-2"><GoOrganization /></div>
                  <div>{items.orgname}</div>
                </div>
                <div className="flex items-center py-2">
                  <div className="pr-2"><CiLocationOn /></div>
                  <div>{items.venue}</div>
                </div>
                <div className="flex py-2">
                  <div className="flex items-center pr-4">
                    <div className="pr-2"><CiCalendarDate /></div>
                    <div>{items.date}</div>
                  </div>
                  <div className="flex items-center">
                    <div className="pr-2"><CiTimer /></div>
                    <div>{items.time}</div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="pl-1">OD: {items.od}</div>
                </div>
              </div>
            </div>
            <div className="bg-[#4167ED]  py-36 px-16 rounded-r-xl text-white"><FaArrowRight size={40}/></div>
          </div>
        ))}
        <Footer/>
    </div>
   );
}
 
export default Eventdisp;
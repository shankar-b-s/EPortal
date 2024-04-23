import { BsTelephonePlus } from "react-icons/bs";
import { PiSmileySadFill } from "react-icons/pi";
import Backhomenav from "./Backhomenav";
const Contact = () => {
  return ( 
    <div className="contact flex flex-col justify-between overflow-x-hidden h-screen">
      <div className="py-10"><Backhomenav/></div>
      <div className="justify-center flex flex-col items-center mb-64">
        <div className="pb-10"><PiSmileySadFill size={80}/></div>
        <div className="flex justify-center items-center">
          <div className="px-10"><BsTelephonePlus size={40}/></div>
          <div className="text-4xl">Currently not available</div>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;
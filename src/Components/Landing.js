import Aboutus from "./Aboutus";
import Circular from "./Circular";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Landing = () => {
  return ( 
    <div className="landing flex flex-col">
      <Navbar/>
      <Circular/>
      <Aboutus />
      <Footer/>
    </div>
   );
}
 
export default Landing;
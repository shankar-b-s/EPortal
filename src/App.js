import Landing from './Components/Landing';
import Events from './Components/Events';
import SignIn from './Components/Signin';
import About from './Components/About';
import Aboutus from './Components/Aboutus';
import {Routes,Route} from 'react-router-dom';
import Adminlogin from './Components/Adminlogin';
import Addevent from './Components/Addevent';
import Contact from './Components/Contact';
import Mainsignin from './Components/Mainsignin';
function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/' element={<Mainsignin/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/aboutc' element={<About/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/addevent' element={<Addevent/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;

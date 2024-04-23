import stdygrp from '../Images/stdygrp.png';
import Typewriter from 'typewriter-effect';
const Aboutus = () => {
  return ( 
    <div className="aboutus text-black font-MyFont p-14 py-28 flex flex-col">
      <div className="font-semibold text-7xl"><span className="text-black">ABOUT </span><span className="text-[#4167ED]">US</span></div>
      <div className="text-3xl py-10 flex items-center justify-between">
        <div className='p-14'>
          <div className='text-3xl'>
            <Typewriter
              options={{
                strings: ['Missing out Events you are interested in?', 
                'Registrations getting over before you even notice?',
                'Not getting to know which events get you OD?',
                'Don\'t worry we got you covered!'],
                autoStart: true,
                loop: true,
                delay:50,
                deleteSpeed:25,
              }}
            />
          </div>
          <div className='text-2xl py-10'>
            <p className='py-2'>Events Portal aims to connect you to all the events </p>
            <p className='py-2'>happening around you, so that you won't miss out a chance </p>
            <p className='py-2'> to participate, learn and grow.</p>
          </div>
          <button className="bg-[#4167ED] hover:bg-white hover:border-2 hover:border-black hover:text-[#4167ED] text-xl text-white p-4 font-semibold rounded-xl my-6"><a href="/events">Find Out </a></button>
        </div>
        <div className='ml-10 pr-24'>
          <img src={stdygrp} alt="img" />
        </div>
      </div>
    </div>
   );
}
 
export default Aboutus;
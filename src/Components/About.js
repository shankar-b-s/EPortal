import React from 'react';
import myimage from '../Images/Shankar.jpg';
import myimage1 from '../Images/Atharva.jpg';

const About=()=>{
    return(
      <div className='flex flex-col items-center bg-white'>
        <div className='title font-semibold'>
          <div className='text-4xl p-20'>ABOUT US</div>
        </div>
        <div className='flex justify-evenly'>
          <div className='flex flex-col justify-between items-center'>
              <div className='px-20'><img src={myimage} alt='Shankar' className=' rounded-3xl size-96'/></div>   
              <div className='py-10 text-2xl flex flex-col items-center'>
                <h1 className='py-1'>SHANKAR BS</h1>
                <h3>22BCT0075</h3>
              </div>
          </div >
          <div className='flex flex-col justify-between items-center'>
              <div> <img src={myimage1} alt='Atharva' className=' rounded-3xl size-96'/> </div> 
              <div className='py-10 text-2xl flex flex-col items-center'>
                <h1>ATHARVA A V</h1>
                <h3>22BCE2886</h3>
              </div>
          </div>
        </div>
      </div>
        
); 
}
export default About;
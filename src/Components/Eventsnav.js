import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { GoOrganization } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import data from './data.json';

const Eventsnav = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const items = data['itemvals'];

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredResults = items.filter(item => 
      item.eventname.toLowerCase().includes(searchTerm) ||
      item.orgname.toLowerCase().includes(searchTerm) ||
      item.venue.toLowerCase().includes(searchTerm)
    );

    setSearchResults(filteredResults);
  };

  const remainingItems = items.filter(item => !searchResults.includes(item)); 

  return ( 
    <div className="eventsnav flex flex-col font-MyFont">
      <div className='flex items-center justify-between p-10'>
        <div>
          <a href="/landing"><img src={logo} alt="img" /></a>
        </div>
        <div>
          <div className='flex items-center py-3 px-4 border-2 border-black rounded-lg'>
            <div className='px-1'><IoIosSearch size={20}/></div>
            <input 
              type="search" 
              name="search-form" 
              id="search-form" 
              className="search-input focus:outline-0"  
              placeholder="Search events"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='p-10 text-4xl'><p>EVENTS AROUND YOU</p></div>
        <div>
          <button className='hover:bg-white hover:text-black hover:border-2 hover:border-black bg-[#4167ED] text-white font-semibold px-4 py-4 rounded-lg mr-36 '>
            <div className='flex items-center'>
              <div className='pr-2'><FaPlus size={20} /></div>
              <div><a href="/adminlogin">ADD EVENT</a></div>
            </div>
          </button>
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((item, index) => (
            <div key={index} className="eventsmain flex justify-between border-2 border-black rounded-xl  m-10 font-MyFont">
              <div className="flex justify-evenly items-center">
                <div className="p-16"><img src={logo} alt="" /></div>
                <div className="flex flex-col p-12 text-xl pl-96">
                  <div className="py-2">{item.eventname}</div>
                  <div className="flex items-center py-2">
                    <div className="pr-2"><GoOrganization /></div>
                    <div>{item.orgname}</div>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="pr-2"><CiLocationOn /></div>
                    <div>{item.venue}</div>
                  </div>
                  <div className="flex py-2">
                    <div className="flex items-center pr-4">
                      <div className="pr-2"><CiCalendarDate /></div>
                      <div>{item.date}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="pr-2"><CiTimer /></div>
                      <div>{item.time}</div>
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="pl-1">OD: {item.od}</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#4167ED] hover:text-black hover:bg-white  py-36 px-16 rounded-r-xl text-white"><a href="https://vtop.vit.ac.in/vtop/content"><FaArrowRight size={40}/></a></div>
            </div>
          ))}
        </div>
      )}

      {remainingItems.length > 0 && (
        <div className="remaining-events">
          {remainingItems.map((item, index) => (
            <div key={index} className="eventsmain flex justify-between border-2 border-black rounded-xl  m-10 font-MyFont">
              <div className="flex justify-evenly items-center">
                <div className="p-16"><img src={logo} alt="" /></div>
                <div className="flex flex-col p-12 text-xl pl-96">
                  <div className="py-2">{item.eventname}</div>
                  <div className="flex items-center py-2">
                    <div className="pr-2"><GoOrganization /></div>
                    <div>{item.orgname}</div>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="pr-2"><CiLocationOn /></div>
                    <div>{item.venue}</div>
                  </div>
                  <div className="flex py-2">
                    <div className="flex items-center pr-4">
                      <div className="pr-2"><CiCalendarDate /></div>
                      <div>{item.date}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="pr-2"><CiTimer /></div>
                      <div>{item.time}</div>
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="pl-1">OD: {item.od}</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#4167ED]  py-36 px-16 rounded-r-xl text-white"><FaArrowRight size={40}/></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 
export default Eventsnav;
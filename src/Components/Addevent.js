import { useState } from "react";
import Backhomenav from "./Backhomenav";
import data from './data.json';

const Addevent = () => {
  const [eventname,seteventname] = useState('');
  const [orgname,setorgname] = useState('');
  const [venue,setvenue] = useState('');
  const [date,setdate] = useState('');
  const [time,settime] = useState('');
  const [od,setod] = useState('');

  const items = data['itemvals'];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventData = { eventname, orgname, venue, date, time, od };

    try {
      const response = await fetch('http://localhost:5000/api/saveEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        console.log('Event data saved successfully!');
        seteventname('');
        setorgname('');
        setvenue('');
        setdate('');
        settime('');
        setod('');
      } else {
        console.error('Failed to save event data.');
      }
    } catch (error) {
      console.error('Error saving event data:', error);
    }
  };

  return ( 
    <div className="addevent overflow-x-hidden font-MyFont flex flex-col justify-center items-center h-screen p-24">
      <div className="mt-96"><Backhomenav/></div>
      <div className="shadow-lg shadow-slate-400 p-24 rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="text-5xl py-4">
            <div>EVENT DETAILS</div>
          </div>
          <div className="text-2xl py-2">
            <div><label htmlFor="Eventname">Event Name: </label></div> <br />
            <div><input type="text" placeholder="Event name" value={eventname} className="focus:outline-0" onChange={(e) => seteventname(e.target.value)} /></div>
            <hr />
          </div>
          <div className="text-2xl py-2">
            <div><label htmlFor="orgname" >Organization Name: </label></div> <br />
            <div><input type="text" placeholder="Organization name" value={orgname} className="focus:outline-0" onChange={(e) => setorgname(e.target.value)}/></div>
            <hr />
          </div>
          <div className="text-2xl py-2">
            <div><label htmlFor="venue">Venue: </label></div> <br />
            <div><input type="text" placeholder="Venue" value={venue} className="focus:outline-0" onChange={(e) => setvenue(e.target.value)}/></div>
            <hr />
          </div>
          <div className="text-2xl py-2">
            <div><label htmlFor="date">Date: </label></div> 
            <div><input type="date" value={date} className="focus:outline-0" onChange={(e) =>setdate(e.target.value)}/></div>
          </div>
          <div className="text-2xl py-2">
            <div><label htmlFor="time">Time: </label></div> 
            <div><input type="time" value={time} className="focus:outline-0" onChange={(e) => settime(e.target.value)}/></div>
          </div>
          <div className="text-2xl py-2">
            <div><label htmlFor="od">OD: </label></div>
            <div>
              <select name="od" id="od" value={od} onChange={(e)=> setod(e.target.value)}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="text-2xl py-2">
            <div className="py-2"><label htmlFor="logo">Event Logo: </label> <br /></div>
            <div><input type="file" id="img" name="img" accept="image/*" /></div>
          </div>
          <div className="text-2xl py-2"><button className="bg-[#417EDF] px-4 py-3 rounded-xl text-white hover:bg-white hover:border-2 hover:border-black hover:text-black">Submit</button></div>
          <div>{eventname} {orgname} {venue} {date} {time} {od}</div>
        </form>
      </div>
    </div>
   );
}
 
export default Addevent;
import { useState } from "react";
import Backhomenav from "./Backhomenav";
const Adminlogin = () => {
    const [registernum, setRegisternum] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateAdmin(registernum, password)) {
            setError('Invalid Admin Details.');
            return;
        } else {
            window.location.href = '/addevent';
        }
        console.log('Reg.number:', registernum);
        console.log('Password:', password);

        setError('');
    };

    const validateAdmin = (registernum, password) => {
        if (registernum === "22BCT0075" || registernum === "22BCE2886") {
            if (password === "Webprog") {
                return true;
            }
        } else {
            return false;
        }
    };

    return (
        <div className="adminlogin text-black flex flex-col justify-center items-center h-screen">
            <div><Backhomenav/></div>
            <div>
              <form onSubmit={handleSubmit} className="font-MyFont">
                  <div className="shadow-lg shadow-slate-400 rounded-2xl px-32 py-20">
                    <div className="text-5xl pb-14">ADMIN LOGIN</div>
                    <div className="py-6 text-xl">You can add events only if you are an ADMIN.</div>
                    <table>
                        <tr>
                            <td><div className="pr-4 mb-4"><label htmlFor="regno">REG. NO</label></div></td>
                            <td><div className="mb-4"><input type="text" value={registernum} placeholder="Enter admin reg no" className='focus: outline-0 rounded-lg border-2 border-black p-1 py-2' onChange={(e) => setRegisternum(e.target.value)} /></div></td>
                        </tr>
                        <tr>
                            <td><div className="pr-4 mb-4"><label htmlFor="pwd">PASSWORD</label></div></td>
                            <td><div className="mb-4"><input type="password" value={password} placeholder="Enter admin pwd" className='focus: outline-0 rounded-lg border-2 border-black p-1 py-2' onChange={(e) => setPassword(e.target.value)} /></div></td>
                        </tr>
                    </table>
                    {error && <div className="text-red-500">{error}</div>}
                    <div className="py-8"><button type="submit" className='hover:bg-white hover:border-2 hover:border-black hover:text-[#4167ED] bg-[#4167ED] text-white font-semibold rounded-lg px-4 py-3 ml-1'>Sign In</button></div>
                  </div>
              </form>
            </div>
        </div>
    );
}

export default Adminlogin;

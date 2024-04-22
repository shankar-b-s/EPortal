import React, { useState } from 'react';
import logo from '../Images/logo.png';
import './Signin.css'; 

const SignIn = () => {
    const [registernum, setRegisternum] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [details,setdetails] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateRegisternum(registernum)) {
            setError('Invalid format.');
            return;
        }
        else{
            setdetails(true);
            window.location.href='/landing';
        }
        console.log('Reg.number:', registernum);
        console.log('Password:', password);
        
        setError('');
        
    };

    const validateRegisternum = (registernum) => {
        const regex = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
        return regex.test(registernum);
    };

    return (
        <div className="container font-MyFont">
            <div className="signin">
                <div><img src={logo} alt="" /></div>
                <div className="Sign text-6xl py-10"><h2>SIGN IN</h2></div>
                <form onSubmit={handleSubmit}>
                    <div className='big'>
                    <table>
                        <tr>
                            <td>
                                <label className='text-nowrap mr-10'>Reg. number</label>
                            </td>
                            <td>
                            <input type="text" className='focus: outline-0 rounded-lg border-2 border-black mb-4 p-1' value={registernum} onChange={(e) => setRegisternum(e.target.value)} />

                            </td>
                        </tr>
                        <tr>
                            <td>
                            <label className='text-nowrap'>Password</label>
                            </td>
                            <td>
                            <input type="password" className='focus: outline-0 rounded-lg border-2 border-black p-1' value={password} onChange={(e) => setPassword(e.target.value)} />
                        

                            </td>
                        </tr>
                    </table>
                   
                    </div>
                    {error && <div className="error">{error}</div>} 
                    <div className="sub"><center><button type="submit" className='but hover:font-semibold text-white rounded-lg'>Sign In</button></center></div>
                    
                </form>
            
            </div>
            
        </div>
    );
};

export default SignIn;
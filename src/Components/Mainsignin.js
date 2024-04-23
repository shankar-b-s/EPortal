import React, { useState } from "react";
import Navbar from "./Navbar";
import SignIn from "./Signin";

const Mainsignin = () => {
  const [details, setdetails] = useState(false);
  const [registernum, setRegisternum] = useState("");
  console.log(registernum);
  return (
    <div className="mainsignin">
      <div className="hidden">
        <Navbar details={details} registernum={registernum} />
      </div>
      <div>
        <SignIn
          setdetails={setdetails}
          registernum={registernum}
          setRegisternum={setRegisternum}
        />
      </div>
    </div>
  );
};

export default Mainsignin;

import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [firstName, setFirstName] = useState("");

  return (
    <form>
      <div className="input-container">
        <input
          id="firstName"
          className="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          id="lastName"
          className="lastName"
          type="text"
          placeholder="Last Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          id="email"
          className="email"
          type="text"
          placeholder="email"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Signup;

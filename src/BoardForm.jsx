import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function BoardForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    
    if (!email || !password ) {
      setError("All fields are required.");
      return;
    }

    var emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    setError("");
    alert("Login Successful!"); 
    navigate("/SecretaryDashboard"); 
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

 
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email"
                   placeholder="Email Address"
                   value={email}
                   onChange = {handleEmailChange}
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={handlePasswordChange} 
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
        </form>
        
    </div>
  );
}

export default BoardForm;

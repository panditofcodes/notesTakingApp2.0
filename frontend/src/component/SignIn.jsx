import React from "react";
import "./component.css"; // Assuming this is your global CSS

function SignIn({ handleSwitching }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    console.log("Signing in...");
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userEmail">Email</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="Enter your Email"
          required
        />
        <label htmlFor="userPwd">Password</label>
        <input type="password" name="userPwd" id="userPwd"  placeholder="Enter your Password" required />
        <button type="submit">Sign In</button>
      </form>
      <p className="register-link">
        Don't have an account?{" "}
        <a href="#" onClick={handleSwitching}>
          Register now
        </a>
      </p>
    </div>
  );
}

export default SignIn;

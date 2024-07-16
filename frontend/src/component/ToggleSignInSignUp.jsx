import React, { useState } from "react";
import "./component.css"
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function ToggleSignInSignUp() {
  const [togglePage, setTogglePage] = useState(false);

  const handleSwitching = (e) => {
    setTogglePage(!togglePage);
    e.preventDefault();
  };

  return (
    <div className="toggle-container"> {/* Apply the CSS class */}
      {togglePage ? (
        <SignIn handleSwitching={handleSwitching} />
      ) : (
        <SignUp handleSwitching={handleSwitching} />
      )}
    </div>
  );
}

export default ToggleSignInSignUp;

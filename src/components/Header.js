import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onBtnClick = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button onClick={onBtnClick} className="login-btn">
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const onBtnClick = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

  // Selector
  // Subscribing to the store using selector
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between border border-solid border-black items-center bg-pink-400 sm:bg-red-400 lg:bg-orange-400">
      <div className="logo">
        <img className="w-20 h-20 mx-10" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "🧑‍🎤" : "🧶"}
          </li>
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart"> Cart ({cart.length})</Link>
          </li>
          <button className="px-4" onClick={onBtnClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

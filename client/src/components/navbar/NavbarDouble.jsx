import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets"; // Ensure the assets path is correct
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const NavbarDouble = () => {
  const [menu, setMenu] = useState("home");
  const { totalItemCount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar navbar-double">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <h3>FAQs</h3>
    </div>
  );
};

export default NavbarDouble;

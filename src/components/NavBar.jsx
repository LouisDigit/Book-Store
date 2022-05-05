import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const NavBar = () => {
  const { toggleModals } = useContext(UserContext);

  return (
    <nav className="navbar navbar-light bg-light px4">
      <Link to="/" className="navbar-brand ms-2">
        Book Store
      </Link>
      <div>
        <button
          onClick={() => toggleModals("signUp")}
          className="btn btn-primary"
        >
          Sign Up
        </button>
        <button
          onClick={() => toggleModals("signIn")}
          className="btn btn-primary ms-2"
        >
          Sign In
        </button>
        <button className="btn btn-danger ms-2">Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-transparent  rounded"
        aria-label="Navbar"
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-lg-flex" id="Navbar">
            <a className="navbar-brand col-lg-3 me-0 text-white" href="#">
            Donezo
            </a>
            <div className="d-lg-flex col-lg-9 justify-content-lg-end">
              <button className="btn btn-light ms-1"> 
                <a href="/login">Log In</a>
              </button>
              <button className="btn btn-light ms-1"><a href="/signup">Sign Up</a></button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

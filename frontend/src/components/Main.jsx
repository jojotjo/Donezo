import React from "react";
import logo from "../assets/logo/63.jpg";

const Main = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center text-white">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          style={{ borderRadius: "45px" }}
          alt=" Donezo logo"
          width="70"
          height="61"
        />
        <h1 className="display-5 fw-bold text-white">Donezo</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4" style={{ textAlign: "center" }}>
            Donezo is a smart and efficient task manager designed to help you stay organized and productive. Easily track, manage, and complete
            your tasks with an intuitive and user-friendly interface.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-light btn-lg px-4 gap-3">
                <a href="/manager">  Plan Now</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

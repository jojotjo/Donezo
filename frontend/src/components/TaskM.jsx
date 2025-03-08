import React from "react";
import logo from "../assets/logo/63.jpg";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const TaskM = () => {
  return (
    <>
      <div className="container-fluid text-white min-vh-100 p-4">
        <img
          className="d-block ms-2 mb-4"
          src={logo}
          style={{ borderRadius: "45px" }}
          alt="Donezo logo"
          width="70"
          height="61"
        />
        <h1 className="text-center mb-8 mt-4">Donezo</h1>
        <p className="text-center lead">Your Task Manager!</p>
        <div className="d-flex justify-content-center mx-auto">
          <IconButton>
            <AddCircleIcon style={{ color: "white", fontSize: 80 }} />
          </IconButton>
        </div>

        <div className="row g-4">
          <div className="col-md-5 col-lg-3">
            <div
              className="card bg-secondary text-white ms-2"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">Task-Clean Room</h5>
                <p className="card-text">
                  need to do laundry and collect books
                </p>
                <button type="button" className="btn btn-light me-2">
                  <CheckCircleIcon color="dark" fontSize="large" />
                </button>
                <button type="button" className="btn btn-light me-2">
                <DeleteIcon color="dark" fontSize="large" />
                </button>
                <button type="button" className="btn btn-light me-2">
                 <CloseIcon color="dark" fontSize="large" />
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskM;

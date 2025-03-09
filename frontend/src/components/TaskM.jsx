import React, { useState } from "react";
import logo from "../assets/logo/63.jpg";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";

const TaskM = () => {
  const [showForm, setShowForm] = useState(false);
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [editIndex, setEditIndex] = useState(null); // Track which card is being edited
  const [searchQuery, setSearchQuery] = useState(""); // Search input

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit (Add or Edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description) {
      if (editIndex !== null) {
        // Update existing card
        const updatedCards = [...cards];
        updatedCards[editIndex] = { ...formData, completed: cards[editIndex].completed };
        setCards(updatedCards);
        setEditIndex(null); // Reset edit mode
      } else {
        // Add new card
        setCards([...cards, { ...formData, completed: false }]);
      }
      setFormData({ title: "", description: "" });
      setShowForm(false);
    }
  };

  // Toggle completed state for a card
  const toggleComplete = (index) => {
    setCards(
      cards.map((card, i) => (i === index ? { ...card, completed: !card.completed } : card))
    );
  };

  // Delete a card
  const deleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  // Edit a card (Prefill form with existing data)
  const editCard = (index) => {
    setFormData(cards[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  // Filter cards based on search query
  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container-fluid text-white min-vh-100 p-4">
        <img className="d-block ms-2 mb-4" src={logo} style={{ borderRadius: "45px" }} alt="Donezo logo" width="70" height="61" />
        <h1 className="text-center mb-4 mt-4">Donezo</h1>
        <p className="text-center lead">Your Task Manager!</p>

        {/* Search Input */}
        <div className="text-center mb-3">
          <input
            type="text"
            className="form-control w-50 d-inline"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton>
            <SearchIcon style={{ color: "black", fontSize: 40 }} />
          </IconButton>
        </div>

        {/* Button to Show/Hide Form */}
        <div className="text-center">
          <button className="btn btn-light" onClick={() => setShowForm(!showForm)}>
            <IconButton>
              <AddCircleIcon style={{ color: "black", fontSize: 40 }} />
            </IconButton>
          </button>
        </div>

        {/* Form to Add/Edit Task */}
        {showForm && (
          <div className="row justify-content-center mt-3">
            <div className="col-md-6">
              <div className="card p-3 shadow rounded" style={{ maxWidth: "30rem", margin: "auto" }}>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" value={formData.title} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Description</label>
                    <textarea name="description" className="form-control" value={formData.description} onChange={handleInputChange} required />
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    {editIndex !== null ? "Update Task" : "Add Task"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Cards Display */}
        <div className="row g-4 mt-4">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <div key={index} className="col-md-4 col-lg-3">
                <div className="card bg-secondary text-white p-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title" style={{ textDecoration: card.completed ? "line-through" : "none" }}>
                      {card.title}
                    </h5>
                    <p className="card-text" style={{ textDecoration: card.completed ? "line-through" : "none" }}>
                      {card.description}
                    </p>
                    {/* Complete Task Button */}
                    <button type="button" className="btn btn-light me-2" onClick={() => toggleComplete(index)}>
                      <CheckCircleIcon color={card.completed ? "success" : "dark"} fontSize="large" />
                    </button>
                    {/* Edit Task Button */}
                    <button type="button" className="btn btn-light me-2" onClick={() => editCard(index)}>
                      <EditIcon style={{ color: "black", fontSize: 30 }} />
                    </button>
                    {/* Delete Task Button */}
                    <button type="button" className="btn btn-light" onClick={() => deleteCard(index)}>
                      <DeleteIcon color="dark" fontSize="large" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No tasks found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskM;

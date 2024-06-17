import React, { useState } from "react";

const AddUserForm = ({ onAddUser = () => {} }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const isAdmin = role === "admin";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Role:", role);
    if (isAdmin) {
      console.log("Password:", password);
    }
    setName(""); // Reset form fields
    setRole("");
    setPassword("");
    setShowForm(false); // Hide the form after submission
    onAddUser(); // Call the onAddUser callback function if provided
  };

  const handleShowForm = () => {
    setShowForm(true); // Show the form when the button is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form when the "Add User" button is clicked
  };

  return (
    <>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          {isAdmin && (
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button onClick={handleShowForm}>Add User</button>
      )}
    </>
  );
};

export default AddUserForm;

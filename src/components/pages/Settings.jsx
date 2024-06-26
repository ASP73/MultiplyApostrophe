import React, { useState } from "react";
import AddUserForm from "../AddUserForm";

const Settings = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddUser = () => {
    setShowForm(true);
    console.log("User added successfully!");
  };

  return (
    <div>
      <h1>Settings Page</h1>
      <AddUserForm onAddUser={handleAddUser} />
    </div>
  );
};

export default Settings;

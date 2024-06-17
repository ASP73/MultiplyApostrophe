import "./App.css";
import mrparker from "./assets/mrparker.svg";
import Header from "./components/Header";
import users from "./data/users.json";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Settings from "./components/Settings.jsx";

function App() {
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const currentUser = users.find((user) => user.name === userName);
  const isAdmin = currentUser ? currentUser.role === "admin" : false;

  return (
    <Router basename="/">
      <Header isAdmin={isAdmin} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <img src={mrparker} className="logo react" alt="React logo" />
              </div>
              <div className="headlines">
                <h1>It&#39;s Quiz time!!</h1>
                <div className="input-container">
                  <label htmlFor="name-input" className="input-label">
                    Please enter your name
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    placeholder="Your name here"
                    className="input-field"
                    value={userName}
                    onChange={handleUserNameChange}
                  />
                </div>
              </div>
              <div className="card">
                <button className="headlines">Let&#39;s go!</button>
              </div>
            </>
          }
        />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;

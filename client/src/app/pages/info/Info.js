import { useState } from "react";
import axios from "axios";

import "./styles.css";

function Info({ user }) {
  const [users, setUsers] = useState([]);
  const handleGetUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user", {
        withCredentials: true,
      });
      console.log(response);
      setUsers(response.data || []);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div class="info-container">
      <h1>Welcome Back {user.displayName}</h1>
      <h2>User Information</h2>
      <div class="info-block">
        <div className="info-field">
          <p className="label">First Name:</p>
          <p className="value">{user.givenName}</p>
        </div>
        <div className="info-field">
          <p className="label">Last Name:</p>
          <p className="value">{user.surname}</p>
        </div>
        <div className="info-field">
          <p className="label">Email:</p>
          <p className="value">{user.mail}</p>
        </div>
      </div>
      <button className="get-button" onClick={handleGetUsers}>
        Get List User
      </button>
    </div>
  );
}

export default Info;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Login({ setLoggedIn }: {setLoggedIn: any}) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  async function loginUser() {
  return fetch("http://localhost:8080/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username }),
  })
    .then((r) => r.json())
    .then((r) => {
      if ("success" === r.message) {
        localStorage.setItem(
          "user",
          JSON.stringify({ email, username, token: r.token })
        );
        setLoggedIn(true);
		navigate("/");
      } else {
        window.alert("Wrong email or password");
      }
    });
}

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setEmailError("");
    setUsernameError("");

    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === username) {
      setUsernameError("Please enter a username");
      return;
    }
    loginUser();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label className="errorLabel">{usernameError}</label>
        <label>
          <p>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="errorLabel">{emailError}</label>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

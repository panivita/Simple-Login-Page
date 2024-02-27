import React, { useState } from "react";
//import "./Login.css";

async function loginUser(credentials: { username: string; email: string; }) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }: {setToken: any}) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const token = await loginUser({
      username,
      email,
    });
    setToken(token);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

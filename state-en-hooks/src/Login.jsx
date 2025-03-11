import { useState } from "react";

export default function Login() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [password, setPassword] = useState("");

  let isFormValid =
    userData.username.length > 0 && userData.password.length > 0;

  const submit = () => alert("Login succesful!");

  return (
    <div className="container">
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          className="username"
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="password"
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
      </div>
      <button onClick={submit} disabled={!isFormValid}>
        Login
      </button>
    </div>
  );
}

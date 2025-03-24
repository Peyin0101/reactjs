import React, { useState } from "react";

export default function LoginModal() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      {!isOpen && (
        <button
          onClick={() => setOpen(true)}
          className="firstlogbtn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      )}

      {isOpen && (
        <div className="formcontainer bg-white rounded-lg shadow-md flex flex-col gap-8">
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button className="loginbtn" type="submit">
            Login
          </button>
          <button className="closebtn" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

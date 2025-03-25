import { useRef, useState } from "react";

function LoginForm() {
  // Refs gebruiken voor formulier inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Controleren of de velden ingevuld zijn
    if (!email || !password) {
      // Alert geven om alle velden te invullen
      alert("Je moet alle velden invullen!");
      return;
    }

    // Formulier data tonen
    alert(`Email: ${email} \nWachtwoord: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Aanmeldformulier
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            E-mail:
          </label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className="border border-gray-300 p-2 rounded-lg w-full"
            placeholder="Voer je e-mail in"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Wachtwoord:
          </label>
          <input
            type="password"
            name="password"
            ref={passwordRef}
            className="border border-gray-300 p-2 rounded-lg w-full"
            placeholder="Voer een wachtwoord in"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold transition-colors duration-300"
        >
          Aanmelden
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

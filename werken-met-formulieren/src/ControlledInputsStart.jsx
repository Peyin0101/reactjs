import React, { useState } from "react";

function RegistrationForm() {
  // State gebruiken voor formulier inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    preference: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Naam: ${formData.name} \nEmail: ${formData.email} \nWachtwoord: ${formData.password} \nVoorkeur: ${formData.preference}`
    );
  };

  // Alle velden moeten ingevuld zijn
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.preference !== "" &&
    formData.agreeToTerms;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Registratieformulier
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Naam:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="border border-gray-300 p-2 rounded-lg w-full"
            placeholder="Voer je naam in"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            E-mail:
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
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
            onChange={handleChange}
            value={formData.password}
            className="border border-gray-300 p-2 rounded-lg w-full"
            placeholder="Voer een wachtwoord in"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Voorkeur:
          </label>
          <select
            name="preference"
            onChange={handleChange}
            value={formData.preference}
            className="border border-gray-300 p-2 rounded-lg w-full"
          >
            <option value="">Kies een categorie</option>
            <option value="technology">Technologie</option>
            <option value="health">Gezondheid</option>
            <option value="sports">Sport</option>
            <option value="education">Onderwijs</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              onChange={handleChange}
              checked={formData.agreeToTerms}
              className="mr-2"
            />
            Ik ga akkoord met de algemene voorwaarden
          </label>
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 rounded-lg font-semibold transition-colors duration-300 ${
            isFormValid ? "hover:bg-blue-600" : "cursor-not-allowed opacity-50"
          }`}
          disabled={!isFormValid}
        >
          Registreren
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;

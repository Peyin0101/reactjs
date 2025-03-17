import { useState } from "react";

export default function Deelnemers() {
  const [deelnemers, setDeelnemers] = useState([
    { id: crypto.randomUUID(), name: "Randi VolStijl", isAanwzig: true },
    { id: crypto.randomUUID(), name: "Idris Gay", isAanwzig: false },
    { id: crypto.randomUUID(), name: "Warre Pussy", isAanwzig: false },
  ]);
  const [input, setInput] = useState("");

  const addDeelnemer = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setDeelnemers([...deelnemers, { name: input, isAanwzig: false }]);
      setInput("");
    }
  };

  const deleteDeelnemer = (name) => {
    setDeelnemers(deelnemers.filter((deelnemer) => deelnemer.name !== name));
  };

  const toggleAanwzig = (name) => {
    setDeelnemers(
      deelnemers.map((deelnemer) =>
        deelnemer.name === name
          ? { ...deelnemer, isAanwzig: !deelnemer.isAanwzig }
          : deelnemer
      )
    );
  };

  return (
    <div className="container">
      <div className="titel">
        <h1>Deelnemerslijst</h1>
      </div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button
          onClick={addDeelnemer}
          disabled={!input.trim()}
          className="toevoeg"
        >
          Toevoegen
        </button>
      </div>
      <div className="attendance-aanw">
        <h3 className="aanwezig">Aanwezig</h3>
        <ul>
          {deelnemers
            .filter((deelnemer) => deelnemer.isAanwzig)
            .map((deelnemer, index) => (
              <li key={index}>
                {deelnemer.name}
                <p className="status-aanwezig">Aanwezig</p>
                <button
                  onClick={() => toggleAanwzig(deelnemer.name)}
                  className="afwezig-zetten"
                >
                  Markeer als afwezig
                </button>
                <button
                  onClick={() => deleteDeelnemer(deelnemer.name)}
                  className="verwijder"
                >
                  Verwijder
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h3 className="afwezig">Afwezig</h3>
        <ul>
          {deelnemers
            .filter((deelnemer) => !deelnemer.isAanwzig)
            .map((deelnemer, index) => (
              <li key={index}>
                {deelnemer.name}
                <p className="status-afwezig">Afwezig</p>
                <button
                  onClick={() => toggleAanwzig(deelnemer.name)}
                  className="aanwezig-zetten"
                >
                  Markeer als aanwezig
                </button>
                <button
                  onClick={() => deleteDeelnemer(deelnemer.name)}
                  className="verwijder"
                >
                  Verwijder
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function AddParticipantForm({ dispatch }) {
  const [newParticipant, setNewParticipant] = useState("");

  const handleAdd = () => {
    dispatch({ type: "ADD_PARTICIPANT", payload: newParticipant });
    setNewParticipant("");
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={newParticipant}
        onChange={(e) => setNewParticipant(e.target.value)}
        placeholder="Voeg een deelnemer toe..."
        className="border border-gray-300 p-2 rounded-lg w-full"
      />
      <button
        onClick={handleAdd}
        disabled={newParticipant.trim() === ""}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-500"
      >
        Toevoegen
      </button>
    </div>
  );
}

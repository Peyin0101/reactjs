export default function Participant({ participant, dispatch }) {
  return (
    <li className="flex gap-4 justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm">
      <div>
        <p className="font-semibold">{participant.name}</p>
        <IsPresent isPresent={participant.isPresent} />
      </div>
      <div className="flex space-x-2">
        <ToggleButton
          onToggle={() =>
            dispatch({ type: "TOGGLE_PRESENCE", payload: participant.id })
          }
          isPresent={participant.isPresent}
        />
        <RemoveButton
          onRemove={() =>
            dispatch({ type: "REMOVE_PARTICIPANT", payload: participant.id })
          }
        />
      </div>
    </li>
  );
}

function IsPresent({ isPresent }) {
  return (
    <p className={`text-sm ${isPresent ? "text-green-500" : "text-red-500"}`}>
      {isPresent ? "Aanwezig" : "Niet Aanwezig"}
    </p>
  );
}

function ToggleButton({ onToggle, isPresent }) {
  return (
    <button
      onClick={onToggle}
      className={`px-3 py-1 rounded-lg text-white ${
        isPresent
          ? "bg-red-500 hover:bg-red-600"
          : "bg-green-500 hover:bg-green-600"
      }`}
    >
      {isPresent ? "Afwezig maken" : "Aanwezig maken"}
    </button>
  );
}

function RemoveButton({ onRemove }) {
  return (
    <button
      onClick={onRemove}
      className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600"
    >
      Verwijderen
    </button>
  );
}

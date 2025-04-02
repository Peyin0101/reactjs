import Participant from "./Participant";

export default function ParticipantList({ participants, dispatch }) {
  return (
    <div>
      {participants.length > 0 ? (
        <ul className="space-y-4">
          {participants.map((participant) => (
            <Participant
              key={participant.id}
              participant={participant}
              dispatch={dispatch}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">Geen deelnemers toegevoegd.</p>
      )}
    </div>
  );
}

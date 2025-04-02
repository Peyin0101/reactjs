import { useReducer, useState } from "react";
import AddParticipantForm from "./AddParticipantForm";
import ParticipantList from "./ParticipantList";
import participantReducer from "./participantReducer";

export default function Participants() {
  const [participants, dispatch] = useReducer(participantReducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
        <h1 className="text-2xl font-bold mb-6 text-center">Deelnemerslijst</h1>
        <AddParticipantForm dispatch={dispatch} />
        <ParticipantList participants={participants} dispatch={dispatch} />
      </div>
    </div>
  );
}

//   const handleAdd = (name) => {
//     dispatch({
//       type: "ADD",
//       payload: name,
//     });
//   };

//   const handleRemove = (id) => {
//     dispatch({
//       type: "REMOVE",
//       payload: id,
//     });
//   };

//   const handleToggle = (id) => {
//     dispatch({
//       type: "TOGGLE",
//       payload: id,
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
//         <h1 className="text-2xl font-bold mb-6 text-center">Deelnemerslijst</h1>
//         <AddParticipantForm onAdd={handleAdd} />
//         <ParticipantList
//           participants={participants}
//           onToggle={handleToggle}
//           onRemove={handleRemove}
//         />
//       </div>
//     </div>
//   );
// }

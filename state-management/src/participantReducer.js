const ADD_PARTICIPANT = "ADD_PARTICIPANT";
const TOGGLE_PRESENCE = "TOGGLE_PRESENCE";
const REMOVE_PARTICIPANT = "REMOVE_PARTICIPANT";

export const initialState =
  JSON.parse(localStorage.getItem("participants")) || [];

export default function participantReducer(state, action) {
  let newState;

  switch (action.type) {
    case ADD_PARTICIPANT:
      newState = [
        ...state,
        { id: crypto.randomUUID(), name: action.payload, isPresent: false },
      ];
      break;
    case REMOVE_PARTICIPANT:
      newState = state.filter(
        (participant) => participant.id !== action.payload
      );
      break;
    case TOGGLE_PRESENCE:
      newState = state.map((participant) =>
        participant.id === action.payload
          ? { ...participant, isPresent: !participant.isPresent }
          : participant
      );
      break;
    default:
      throw new Error("Unknown action type");
  }

  localStorage.setItem("participants", JSON.stringify(newState));
  return newState;
}

export const addParticipantAction = (name) => ({
  type: ADD_PARTICIPANT,
  payload: name,
});
export const toggleParticipantAction = (id) => ({
  type: TOGGLE_PRESENCE,
  payload: id,
});
export const removeParticipantAction = (id) => ({
  type: REMOVE_PARTICIPANT,
  payload: id,
});

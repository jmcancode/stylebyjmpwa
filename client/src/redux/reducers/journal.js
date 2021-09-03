import {
  ADD_JOURNAL,
  GET_JOURNAL,
  GET_JOURNALS,
  UPDATE_JOURNAL,
  ERROR_JOURNAL,
  DELETE_JOURNAL,
  UPDATE_LIKES,
} from "../actions/types";

const initialState = {
  journals: [],
  journal: null,
  loading: true,
  error: {},
};

function journalReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_JOURNALS:
      return {
        ...state,
        journals: payload,
        loading: false,
      };
    case GET_JOURNAL:
    case UPDATE_JOURNAL:
      return {
        ...state,
        journal: payload,
        loading: false,
      };
    case ADD_JOURNAL:
      return {
        ...state,
        journals: [payload, ...state.journals],
      };
    case UPDATE_LIKES:
      return {
        ...state,
        journals: state.journal.journals.map((journal) =>
          journal._id === payload.id
            ? { ...journal, likes: payload.likes }
            : journal
        ),
        loading: false,
      };
    case DELETE_JOURNAL:
      return {
        ...state,
        journal: state.journal.filter((journal) => journal.id !== payload),
        loading: false,
      };
    case ERROR_JOURNAL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default journalReducer;

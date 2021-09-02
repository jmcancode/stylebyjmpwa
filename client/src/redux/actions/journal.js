import axios from "axios";
import {
  ADD_JOURNAL,
  //   GET_JOURNAL,
  GET_JOURNALS,
  //   UPDATE_JOURNAL,
  ERROR_JOURNAL,
  //   DELETE_JOURNAL,
} from "../actions/types";
import { setAlert } from "./alert";

// get journals
export const getJournals = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/journal");
    dispatch({
      type: GET_JOURNALS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_JOURNAL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// add journals
export const addJournal = (payload) => async (dispatch) => {
  try {
    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post("/api/journal", payload, config);
    dispatch({
      type: ADD_JOURNAL,
      payload: res.data,
    });
    dispatch(setAlert("A new Journal was added!", "success"));
  } catch (err) {
    dispatch({
      type: ERROR_JOURNAL,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

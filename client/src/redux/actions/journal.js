import axios from "axios";
import {
  ADD_JOURNAL,
  GET_JOURNAL,
  GET_JOURNALS,
  //   UPDATE_JOURNAL,
  ERROR_JOURNAL,
  //   DELETE_JOURNAL,
  UPDATE_LIKES,
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

// add journal
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
// get by id
export const getJournal = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/journal/${id}`);
    dispatch({
      type: GET_JOURNAL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_JOURNAL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/journal/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: ERROR_JOURNAL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/journal/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: ERROR_JOURNAL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

import {
  ADD_CANDIDATE_SUCCESS,
  ADD_CANDIDATE_LOADING,
  ADD_CANDIDATE_ERROR,
  DELETE_CANDIDATE_SUCCESS,
  DELETE_CANDIDATE_LOADING,
  DELETE_CANDIDATE_ERROR,
  EDIT_CANDIDATE_SUCCESS,
  EDIT_CANDIDATE_LOADING,
  EDIT_CANDIDATE_ERROR,
  FETCH_CANDIDATE_SUCCESS,
  FETCH_CANDIDATE_LOADING,
  FETCH_CANDIDATE_ERROR,
} from "../actions/user/types";
import axios from "axios";
import { history } from "helpers/history";
var str = window.location.pathname;
let id = str.slice(12);

console.log(id);
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.id);
const GET_URL = "http://localhost:8080/candidate/ShowCandidates/605f25b1b98fa02b9875aaf8";
const ADD_URL = "http://localhost:8080/job/add/605f25b1b98fa02b9875aaf8";
const UPDATE_URL = "http://localhost:8080/job/job/" + id;
const DELETE_URL = "http://localhost:8080/job/deleteJob" + id;

//CREATE------------------------------------------------------------------------------------------------------------------------------------------------

export const createCandidateSuccess = (data) => {
  window.location.reload(false);

  return {
    type: ADD_CANDIDATE_SUCCESS,
    payload: data,
  };
};
export const createCandidate = (candidate) => {
  if (candidate._id) {
    const data = {
      id: candidate.id,
      FullName: candidate.FullName,
      description: candidate.description,
      salary: candidate.salary,
      requirement: candidate.requirement,
    };

    return (dispatch) => {
      dispatch(editCandidate(data));
    };
  } else {
    const data = {
      title: candidate.title,
      description: candidate.description,
      salary: candidate.salary,
      requirement: candidate.requirement,
    };

    return (dispatch) => {
      return axios
        .post(ADD_URL, data)
        .then((response) => {
          dispatch(createCandidateSuccess(response.data));
        })

        .catch((error) => {
          console.log(error);
        })
        .catch((error) => {
          const errorPayload = {};
          errorPayload["message"] = error.response.data;
          errorPayload["status"] = error.response.status;
          dispatch(createCandidateError(errorPayload));
        });
    };
  }
};

export const createCandidateError = (data) => {
  return {
    type: ADD_CANDIDATE_ERROR,

    payload: data,
  };
};

//EDIT---------------------------------------------------------------------------------------------------------------------

export const editCandidateSuccess = (data) => {
  return {
    type: EDIT_CANDIDATE_SUCCESS,
    payload: data,
  };
};

export const editCandidateError = (data) => {
  return {
    type: EDIT_CANDIDATE_ERROR,
    payload: data,
  };
};
export const editCandidate = (data) => {
  const id = data.id;
  return (dispatch) => {
    return axios
      .put(UPDATE_URL, data)
      .then((response) => {
        dispatch(editCandidateSuccess(response.data));
        history.push("/admin/test");
      })

      .catch((error) => {
        const errorPayload = {};
        errorPayload["message"] = error.response.data;
        errorPayload["status"] = error.response.status;
        dispatch(editCandidateError(errorPayload));
      });
  };
};

//FETCh---------------------------------------------------------------------------------------------------
export const fetchCandidatesuccess = (data) => {
  console.log(data[0]);
  return {
    type: FETCH_CANDIDATE_SUCCESS,
    payload: data,
  };
};

export const fetchCandidateLoading = (data) => {
  return {
    type: FETCH_CANDIDATE_LOADING,
    payload: data,
  };
};

export const fetchCandidateError = (data) => {
  return {
    type: FETCH_CANDIDATE_ERROR,
    payload: data,
  };
};

const normalizeResponse = (data) => {
  const arr = data.map((item) => {
    arr.forEach((k) => {
      console.log(arr);
    });
    return arr;
  });
  return arr;
};

export const fetchCandidate = () => {
  let isLoading = true;
  return (dispatch) => {
    dispatch(fetchCandidateLoading(isLoading));
    return axios
      .get(GET_URL)
      .then((response) => {
        const data = response.data.Candidate;

        dispatch(fetchCandidatesuccess(data));
        isLoading = false;
        dispatch(fetchCandidateLoading(isLoading));
      })
      .catch((error) => {
        const errorPayload = {};
        errorPayload["message"] = error.response.data.message;
        errorPayload["status"] = error.response.status;
        dispatch(fetchCandidateError(errorPayload));
        isLoading = false;
        dispatch(fetchCandidateLoading(isLoading));
      });
  };
};

//DELETE------------------------------------------------------------------------------------------------------------------------------------

export const deleteCandidateSuccess = (id) => {
  return {
    type: DELETE_CANDIDATE_SUCCESS,
    payload: {
      id: id,
    },
  };
};

export const deleteCandidateError = (data) => {
  return {
    type: DELETE_CANDIDATE_ERROR,
    payload: data,
  };
};
export const deleteCandidate = (id) => {
  return (dispatch) => {
    return axios
      .delete(`${DELETE_URL}/${id}`)
      .then(() => {
        dispatch(deleteCandidateSuccess(id));
      })
      .catch((error) => {
        const errorPayload = {};
        errorPayload["message"] = error.response.data.message;
        errorPayload["status"] = error.response.status;
        dispatch(deleteCandidateError(errorPayload));
      });
  };
};

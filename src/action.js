import { apiURL } from "./const";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";

const fetchData = payload => ({
  type: FETCH_DATA_SUCCESS,
  payload
});

const requestData = () => ({
  type: FETCH_DATA_SUCCESS,
  payload: { loading: true }
});

export const asyncFetchData = (url = apiURL) => {
  return async dispatch => {
    dispatch(requestData());
    const response = await fetch(url);
    const payload = await response.json();
    dispatch(fetchData(payload));
  };
};

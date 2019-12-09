import { FETCH_DATA_SUCCESS, FETCH_LOADING } from "./action";

const initState = {
  loading: true,
  currentPage: 1,
  totalPages: 0,
  nextPageURL: null,
  previousPageURL: null,
  data: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        totalPages: action.payload.count,
        nextPageURL: action.payload.next,
        previousPageURL: action.payload.previous,
        data: action.payload.results,
        loading: false
      };
    case FETCH_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "FETCH_USERS_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        error: "",
      };
    }
    case "FETCH_USERS_FAILURE": {
      return {
        ...state,
        isLoading: false,
        posts: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;

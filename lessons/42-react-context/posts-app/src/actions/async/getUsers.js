const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchUsersRequest());
    const { data } = await fetch("http://jsonplaceholder.typicode.com/users");
    dispatch(fetchUsersSuccess(data));
  } catch (e) {
    dispatch(fetchUsersFailure(e));
  }
};

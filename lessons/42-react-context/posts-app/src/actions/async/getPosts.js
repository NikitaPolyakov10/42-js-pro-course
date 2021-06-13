const fetchPostsRequest = () => {
  return {
    type: "FETCH_POSTS_REQUEST",
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: posts,
  };
};

const fetchPostsFailure = (error) => {
  return {
    type: "FETCH_POSTS_FAILURE",
    payload: error,
  };
};

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(fetchPostsRequest());
    const { data } = await fetch(
      "http://jsonplaceholder.typicode.com/posts?_expand=user"
    );
    dispatch(fetchPostsSuccess(data));
  } catch (e) {
    dispatch(fetchPostsFailure(e));
  }
};

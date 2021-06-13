const fetchPostsDetailsRequest = () => {
  return {
    type: 'FETCH_POSTSDETAILS_REQUEST',
  };
};

const fetchPostsDetailsSuccess = (postsDetails) => {
  return {
    type: 'FETCH_POSTSDETAILS_SUCCESS',
    payload: postsDetails,
  };
};

const fetchPostsDetailsFailure = (error) => {
  return {
    type: 'FETCH_POSTSDETAILS_FAILURE',
    payload: error,
  };
};

export const fetchPostsDetails = () => async (dispatch) => {
  try {
    dispatch(fetchPostsDetailsRequest());
    const { data } = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}?_embed=comments`
    );
    dispatch(fetchPostsDetailsSuccess(data));
  } catch (e) {
    dispatch(fetchPostsDetailsFailure(e));
  }
};

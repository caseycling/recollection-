import * as api from '../api';

//Action creators (functions that return an action)
export const getPosts = () => async (dispatch) => {
  try {
    //Post data
    const { data } = await api.fetchPosts();

    //Sending post data via action.payload
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

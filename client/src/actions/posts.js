import * as api from '../api';

//Action creators (functions that return an action)
export const getPosts = () => async (dispatch) => {
  try {
    //Post data
    const { data } = await api.fetchPosts();
    console.log('DATA FROM ACTIONS');
    console.log(data);

    //Sending post data via action.payload
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    console.log('POSTS ACTION');
    console.log(post);
    const { data } = await api.createPost(post);
    console.log(data);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

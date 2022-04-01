import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => {
  console.log('API');
  console.log(id);
  console.log(updatedPost);

  return axios.patch(`${url}/${id}`, updatedPost);
};

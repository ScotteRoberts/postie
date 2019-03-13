import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

export default {
  getAllPosts: (_page = '') =>
    axios.get(`${url}/posts`, {
      params: {
        _page,
      },
    }),
  getPost: postId => axios.get(`${url}/posts/${postId}`),
  getPostComments: postId => axios.get(`${url}/comments?postId=${postId}`),
  getAllUsers: () => axios.get(`${url}/users`),
  getUser: userId => axios.get(`${url}/users/${userId}`),
};

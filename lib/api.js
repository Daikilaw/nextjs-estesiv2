// lib/api.js
import axios from 'axios';

const API_URL = 'https://next.adriandesouza.com';

export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

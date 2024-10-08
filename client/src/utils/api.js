import axios from 'axios';

export const fetchMenus = async () => {
  const response = await axios.get('/api/menus'); // Adjust the API endpoint as needed
  return response.data;
};

export const createMenu = async (menu) => {
  const response = await axios.post('/api/menus', menu); // Adjust the API endpoint as needed
  return response.data;
};

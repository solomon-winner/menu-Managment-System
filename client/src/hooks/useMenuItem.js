import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchMenuItems = async () => {
  const { data } = await axios.get('/api/menus');
  return data;
};

export const useMenuItems = () => {
  return useQuery(['menuItems'], fetchMenuItems);
};
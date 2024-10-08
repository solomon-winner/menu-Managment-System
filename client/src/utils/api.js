import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

const fetchMenus = async () => {
  const response = await api.get('/api/menus');
  return response.data;
};

const fetchMenuById = async (id) => {
  const response = await api.get(`/api/menus/${id}`);
  return response.data;
};

const createMenu = async (menu) => {
  const response = await api.post('/api/menus', menu);
  return response.data;
};

export const useMenus = () => {
  return useQuery({
    queryKey: 'menus',
    queryFn: fetchMenus,
  });
};

export const useMenuById = (id) => {
  return useQuery({
    queryKey: ['menu', id],
    queryFn: () => fetchMenuById(id),
  });
};

export const useCreateMenu = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMenu,
    onSuccess: () => {
      queryClient.invalidateQueries('menus');
    },
  });
};
import { useQuery } from '@tanstack/react-query';
import { fetchMenus } from '../utils/api'; 

export const useMenus = () => {
  const { data: menus, isLoading, error } = useQuery({
    queryKey: ['menus'], 
    queryFn: fetchMenus, 
  });

  return { menus, isLoading, error };
};

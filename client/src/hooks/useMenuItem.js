import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { menuState } from '../state/state.js';
import { fetchMenus } from '../utils/api';

export const useMenus = () => {
  const setMenus = useSetRecoilState(menuState);

  const { data: menus, isLoading, error } = useQuery({
    queryKey: ['menus'],
    queryFn: fetchMenus,
    onSuccess: (data) => {
      setMenus(data); // Update Recoil state with fetched data
    },
  });

  return { menus, isLoading, error };
};
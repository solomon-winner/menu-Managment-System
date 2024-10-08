import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { fetchMenus } from '../utils/api';
import { menuState } from '../state/state';

export const useMenus = () => {
  const setMenus = useSetRecoilState(menuState);

  const { data, isLoading, error } = useQuery('menus', fetchMenus, {
    onSuccess: (data) => {
      setMenus(data);
    },
  });

  return { menus: data, isLoading, error };
};
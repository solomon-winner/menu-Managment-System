import { atom, selector } from 'recoil';

export const menuItemsState = atom({
  key: 'menuItemsState',
  default: [],
});

export const selectedMenuItemState = atom({
  key: 'selectedMenuItemState',
  default: null,
});

export const rootMenuItemsState = selector({
  key: 'rootMenuItemsState',
  get: ({ get }) => {
    const menuItems = get(menuItemsState);
    return menuItems.filter(item => item.parentId === null);
  },
});

export const menuItemChildrenState = selector({
  key: 'menuItemChildrenState',
  get: ({ get }) => {
    const menuItems = get(menuItemsState);
    const selectedMenuItem = get(selectedMenuItemState);
    return menuItems.filter(item => item.parentId === selectedMenuItem?.id);
  },
});
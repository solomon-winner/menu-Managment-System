import { atom, selector } from 'recoil';

// Atom to store the list of menu items
export const menuItemsState = atom({
  key: 'menuItemsState',
  default: [],
});

// Atom to store the selected menu item
export const selectedMenuItemState = atom({
  key: 'selectedMenuItemState',
  default: null,
});

// Selector to get the root menu items (items with no parent)
export const rootMenuItemsState = selector({
  key: 'rootMenuItemsState',
  get: ({ get }) => {
    const menuItems = get(menuItemsState);
    return menuItems.filter(item => item.parentId === null);
  },
});

// Selector to get the children of a specific menu item
export const menuItemChildrenState = selector({
  key: 'menuItemChildrenState',
  get: ({ get }) => {
    const menuItems = get(menuItemsState);
    const selectedMenuItem = get(selectedMenuItemState);
    return menuItems.filter(item => item.parentId === selectedMenuItem?.id);
  },
});
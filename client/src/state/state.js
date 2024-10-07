import { atom, selector } from 'recoil';

// Atom to store the list of menu items
export const menuItemsState = atom({
  key: 'menuItemsState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

// Atom to store the selected menu item
export const selectedMenuItemState = atom({
  key: 'selectedMenuItemState', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

// Selector to get the root menu items (items with no parent)
export const rootMenuItemsState = selector({
  key: 'rootMenuItemsState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const menuItems = get(menuItemsState);
    return menuItems.filter(item => item.parentId === null);
  },
});

// Selector to get the children of a specific menu item
export const menuItemChildrenState = selector({
  key: 'menuItemChildrenState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const menuItems = get(menuItemsState);
    const selectedMenuItem = get(selectedMenuItemState);
    return menuItems.filter(item => item.parentId === selectedMenuItem?.id);
  },
});
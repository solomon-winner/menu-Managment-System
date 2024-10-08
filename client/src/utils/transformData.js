export const transformMenuData = (menus) => {
    return menus.map(menu => ({
      title: menu.name,
      key: menu._id,
      children: menu.children ? transformMenuData(menu.children) : [],
    }));
  };
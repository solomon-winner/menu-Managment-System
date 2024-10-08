export const transformMenuData = (menus) => {
    if (!Array.isArray(menus)) {
      return [];
    }
    return menus.map(menu => ({
      title: menu.name,
      key: menu._id,
      children: menu.children ? transformMenuData(menu.children) : [],
    }));
  };
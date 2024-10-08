class MenuDTO {
    constructor({ menuId, name, parentId, depth, children }) {
      this.id = menuId;
      this.name = name;
      this.parentId = parentId;
      this.depth = depth,
      this.children = children;
    }
  
    static fromMenuItem(menuItem) {
      return new MenuDTO({
        id: menuItem._id,
        name: menuItem.name,
        depth: menuItem.depth,
        parentId: menuItem.parentId,
        depth: menuItem.depth,
        children: menuItem.children,
      });
    }
  
    static fromMenuItems(menuItems) {
      return menuItems.map(menuItem => MenuDTO.fromMenuItem(menuItem));
    }
  }
  
  export default MenuDTO;
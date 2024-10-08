class MenuDTO {
    constructor({ id, name, parentId, children }) {
      this.id = id;
      this.name = name;
      this.parentId = parentId;
      this.children = children;
    }
  
    static fromMenuItem(menuItem) {
      return new MenuDTO({
        id: menuItem._id,
        name: menuItem.name,
        depth: menuItem.depth,
        parentId: menuItem.parentId,
        children: menuItem.children,
      });
    }
  
    static fromMenuItems(menuItems) {
      return menuItems.map(menuItem => MenuDTO.fromMenuItem(menuItem));
    }
  }
  
  export default MenuDTO;
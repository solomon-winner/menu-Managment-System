class MenuDTO {
    constructor({ _id, name, parentId, depth, children }) {
      this._id = _id;
      this.name = name;
      this.parentId = parentId;
      this.depth = depth,
      this.children = children;
    }
  
    static fromMenuItem(menuItem) {
      console.log("DTO________>", menuItem)
      return new MenuDTO({
        _id: menuItem._id,
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
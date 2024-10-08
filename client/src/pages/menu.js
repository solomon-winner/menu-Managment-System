import React from 'react';
import { useRecoilValue } from 'recoil';
import { menuState } from '../state';

const MenuComponent = () => {
  const menus = useRecoilValue(menuState);

  return (
    <div>
      <h2>Menus</h2>
      <ul>
        {menus.map((menu) => (
          <MenuItem key={menu.id} item={menu} />
        ))}
      </ul>
    </div>
  );
};

const MenuItem = ({ item }) => {
  return (
    <li>
      {item.name}
      {item.children && item.children.length > 0 && (
        <ul>
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuComponent;
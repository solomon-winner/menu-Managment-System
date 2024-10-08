import React from 'react';
import { useRecoilState } from 'recoil';
import { menuState } from '../state/state.js'; // Adjust the path accordingly

const Menu = () => {
  const [menus, setMenus] = useRecoilState(menuState);

  const addMenu = (newMenu) => {
    setMenus((prevMenus) => [...prevMenus, newMenu]);
  };

  return (
    <div>
      <h2>Menus</h2>
      <ul>
        {menus.map((menu, index) => (
          <li key={index}>{menu.name}</li>
        ))}
      </ul>
      <button onClick={() => addMenu({ name: 'New Menu' })}>Add Menu</button>
    </div>
  );
};

export default Menu;

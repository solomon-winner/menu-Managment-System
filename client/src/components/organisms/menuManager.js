import React from 'react';

import MenuTree from '../molecules/menuTree.jsx';
import MenuForm from '../molecules/menuForm.jsx';
import Header from '../molecules/header.js';


const MenuManager = () => {
  const handleCreateMenu = (newMenu) => {
    // Logic to handle menu creation
  };

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex p-4">
        <MenuTree />
        {/* Assuming MenuForm is another component for creating menus */}
        <MenuForm onCreateMenu={handleCreateMenu} />
      </div>
    </div>
  );
};

export default MenuManager;
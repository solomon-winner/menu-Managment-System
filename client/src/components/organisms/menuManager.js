import React from 'react';
import MenuTree from '../molecules/menuTree.jsx';
import MenuForm from '../molecules/menuForm.jsx';
import Header from '../molecules/header.js';


const MenuManager = () => {
  const handleCreateMenu = (newMenu) => {
  };

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex p-4">
        <MenuTree />
        <MenuForm onCreateMenu={handleCreateMenu} />
      </div>
    </div>
  );
};

export default MenuManager;
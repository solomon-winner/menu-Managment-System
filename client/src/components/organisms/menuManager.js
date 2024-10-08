import React from 'react';
import { useMenus } from '../../hooks/useMenuItem.js';
import MenuTree from '../molecules/menuTree.jsx';
import MenuForm from '../molecules/menuForm.jsx';
import Header from '../molecules/header.js';

const MenuManager = () => {
  const { menus, isLoading, mutation } = useMenus();

  if (isLoading) return <div>Loading...</div>;

  const handleCreateMenu = (newMenu) => {
    mutation.mutate(newMenu);
  };

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex p-4">
        <MenuTree menus={menus} />
        <MenuForm onCreateMenu={handleCreateMenu} />
      </div>
    </div>
  );
};

export default MenuManager;

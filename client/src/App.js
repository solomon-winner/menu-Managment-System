import React from 'react';
import Sidebar from './components/organisms/sideBar.js';
import MenuManager from './components/organisms/menuManager.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { data: menus, isLoading, error } = useMenus();
  const createMenuMutation = useCreateMenu();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleAddMenu = async () => {
    const newMenu = { name: 'New Menu', depth: 1, parentId: null, children: [] };
    createMenuMutation.mutate(newMenu);
  }
  return (
    <>
    <ToastContainer />
    <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray overflow-y-auto">
        <MenuManager  menus={menus} onAddMenu={handleAddMenu} />
      </div>
    </div>
    </>
  );
}

export default App;



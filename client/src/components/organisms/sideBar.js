import React from "react";

function Sidebar() {
  return (
    <div className="bg-gray-900 text-white h-screen w-64 flex flex-col">
      <div className="flex items-center p-4">
        <span className="text-lg font-bold">CQIT</span>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 px-4">
          <li className="bg-gray-800 p-2 rounded text-white">
            <span>Systems</span>
          </li>
          <li className="p-2 rounded text-gray-400 hover:text-white">Properties</li>
          <li className="bg-green-500 p-2 rounded text-white">Menus</li>
          <li className="p-2 rounded text-gray-400 hover:text-white">API List</li>
          <li className="p-2 rounded text-gray-400 hover:text-white">Users & Groups</li>
          <li className="p-2 rounded text-gray-400 hover:text-white">Competition</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

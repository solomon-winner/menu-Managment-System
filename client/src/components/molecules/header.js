import React from "react";
import { PlusOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-600 rounded-full p-2 text-white">
          <PlusOutlined />
        </div>
        <h1 className="text-xl font-bold">Menus</h1>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Header;

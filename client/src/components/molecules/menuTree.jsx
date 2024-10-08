import React, { useState } from "react";
import { Tree } from "antd";
import { RightOutlined, DownOutlined } from "@ant-design/icons";

const treeData = [
  {
    title: "System Management",
    key: "0",
    children: [
      {
        title: "Systems",
        key: "0-0",
        children: [
          {
            title: (
              <>
                System Code <span className="text-blue-600">+</span>
              </>
            ),
            key: "0-0-0",
            children: [{ title: "Code Registration", key: "0-0-0-0" }],
          },
          { title: "Code Registration - 2", key: "0-0-0-1" },
          { title: "Properties", key: "0-0-0-2" },
          {
            title: "Menus",
            key: "0-0-0-3",
            children: [{ title: "Menu Registration", key: "0-0-0-3-0" }],
          },
        ],
      },
    ],
  },
];

function MenuTree() {
  return (
    <div className="p-4">
      <div className="flex items-center space-x-2">
        <button className="bg-gray-300 p-2 rounded">Expand All</button>
        <button className="bg-gray-300 p-2 rounded">Collapse All</button>
      </div>

      <Tree
        showLine={{ showLeafIcon: false }}
        defaultExpandAll
        switcherIcon={({ expanded }) =>
          expanded ? <DownOutlined /> : <RightOutlined />
        }
        treeData={treeData}
      />
    </div>
  );
}

export default MenuTree;

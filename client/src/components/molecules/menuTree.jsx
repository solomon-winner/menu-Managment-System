import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Tree } from 'antd';
import { RightOutlined, DownOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { menuState } from '../../state/state';
import { transformMenuData } from '../../utils/transformData';
import { expandedKeysState, formVisibilityState } from '../../state/visibilityState';
import { useDeleteMenu } from '../../utils/api';

const MenuTree = () => {
  const menus = useRecoilValue(menuState);
  const setMenus = useSetRecoilState(menuState);
  const treeData = Array.isArray(menus.data) ? transformMenuData(menus.data) : [];
  const expandedKeys = useRecoilValue(expandedKeysState);
  const setExpandedKeys = useSetRecoilState(expandedKeysState);
  const setFormVisibility = useSetRecoilState(formVisibilityState);
  const deleteMenuMutation = useDeleteMenu();
  const [selectedItem, setSelectedItem] = useState(null); 
  const [parentItem, setParentItem] = useState(null); 

  console.log('Tree Data:', treeData); 

  const handleExpand = (expandedKeys) => {
    setExpandedKeys(expandedKeys);
  };

  const handleSelect = (selectedKeys, info) => {
    setSelectedItem(info.node); 
    setFormVisibility(true);
  };

  const handleAddClick = (node) => {
    console.log('Add clicked for node:', node);
    setParentItem(node); 
    setFormVisibility(true); 
  };

  const handleDeleteClick = (node) => {
    console.log('Deleting node with key:', node, typeof(node.key));

    if (!node.key) {
      console.error('Node key is undefined');
      return;
    }

    deleteMenuMutation.mutate(node.key, {
      onSuccess: () => {
        const deleteNode = (data, key) => {
          return data.filter(item => {
            if (item.key === key) {
              return false;
            }
            if (item.children) {
              item.children = deleteNode(item.children, key);
            }
            return true;
          });
        };

        const updatedData = deleteNode(treeData, node.key);
        setMenus({ data: updatedData });
      },
      onError: (error) => {
        console.error('Failed to delete node:', error);
      },
    });
  };

  const titleRender = (node) => (
    <div className="flex justify-between items-center">
      <span className="mr-4">{node.title}</span> 
      {selectedItem && selectedItem.key === node.key && ( 
        <div className="flex space-x-4">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#253BFF] text-white">
            <PlusOutlined onClick={() => handleAddClick(node)} />
          </div>
          <DeleteOutlined onClick={() => handleDeleteClick(node)} />
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4">
      <Tree
        showLine={{ showLeafIcon: false }}
        expandedKeys={expandedKeys}
        onExpand={handleExpand}
        onSelect={handleSelect}
        switcherIcon={({ expanded }) =>
          expanded ? <DownOutlined /> : <RightOutlined />
        }
        treeData={treeData}
        titleRender={titleRender}
      />
    </div>
  );
};

export default MenuTree;
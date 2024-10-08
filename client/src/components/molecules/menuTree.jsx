import React from 'react';
import { useRecoilValue } from 'recoil';
import { Tree } from 'antd';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { menuState } from '../../state/state';

const MenuTree = () => {
  const menus = useRecoilValue(menuState);

  const treeData = menus.map(menu => ({
    title: menu.name,
    key: menu._id,
    children: menu.children ? menu.children.map(child => ({
      title: child.name,
      key: child._id,
      children: child.children ? child.children.map(grandchild => ({
        title: grandchild.name,
        key: grandchild._id,
      })) : [],
    })) : [],
  }));

  return (
    <div className="p-4">
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
};

export default MenuTree;
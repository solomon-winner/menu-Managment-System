import React from 'react';
import { useRecoilValue } from 'recoil';
import { Tree } from 'antd';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { menuState } from '../../state/state';
import { transformMenuData } from '../../utils/transformData';

const MenuTree = () => {
  const menus = useRecoilValue(menuState);
  const treeData = transformMenuData(menus);

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
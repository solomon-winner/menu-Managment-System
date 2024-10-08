import React from 'react';
import { useRecoilValue } from 'recoil';
import { Tree } from 'antd';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { menuState } from '../../state/state.js';

const MenuTree = () => {
  const menus = useRecoilValue(menuState);

  return (
    <div className="p-4">

      <Tree
        showLine={{ showLeafIcon: false }}
        defaultExpandAll
        switcherIcon={({ expanded }) =>
          expanded ? <DownOutlined /> : <RightOutlined />
        }
        treeData={menus}
      />
    </div>
  );
};

 export default MenuTree;
// import React from 'react';
// import { Tree } from 'antd';

// const MenuTree = ({ menus }) => {
//   const treeData = menus.map(menu => ({
//     title: menu.name,
//     key: menu.id,
//     // Additional structure for nested menus can be added here
//   }));

//   return (
//     <div className="p-4">
//       <Tree treeData={treeData} />
//     </div>
//   );
// };

// export default MenuTree;


// import React from 'react';
// import { Tree } from 'antd';

// const MenuTree = ({ menus }) => {
//   const treeData = menus.map(menu => ({
//     title: menu.name,
//     key: menu.id,
//     children: menu.children ? menu.children.map(child => ({
//       title: child.name,
//       key: child.id,
//       children: child.children ? child.children.map(grandchild => ({
//         title: grandchild.name,
//         key: grandchild.id,
//       })) : [],
//     })) : [],
//   }));

//   return (
//     <div className="p-4">
//       <Tree treeData={treeData} />
//     </div>
//   );
// };

// export default MenuTree;
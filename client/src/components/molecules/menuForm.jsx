import React, { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedItemState, menuState } from '../../state/state';
import { useUpdateMenu } from '../../utils/api';
import Input from "../atoms/input.js";

const MenuForm = () => {
  const selectedItem = useRecoilValue(selectedItemState);
  const setMenus = useSetRecoilState(menuState);
  const updateMenuMutation = useUpdateMenu();
  const [menuId, setMenuId] = useState('');
  const [depth, setDepth] = useState(0);
  const [parentData, setParentData] = useState('');
  const [name, setName] = useState('');
  const [hasParent, setHasParent] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      console.log('Selected Item:', selectedItem); // Debugging statement
      setMenuId(selectedItem.key); 
      setDepth(selectedItem.depth || 0);
      setParentData(selectedItem.parentId || '');
      setName(selectedItem.title || '');
      setHasParent(!!selectedItem.parentId);
    }
  }, [selectedItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Menu ID:', menuId); 
    const updatedItem = {
      name, menuId
    };
    updateMenuMutation.mutate(updatedItem, {
      onSuccess: (data) => {
        setMenus((prevMenus) => {
          const updateNode = (data, updatedItem) => {
            return data.map(item => {
              if (item.id === updatedItem.id) {
                return { ...item, title: updatedItem.name }; 
              }
              if (item.children) {
                item.children = updateNode(item.children, updatedItem);
              }
              return item;
            });
          };

          const updatedData = updateNode(prevMenus.data, updatedItem);
          return { data: updatedData };
        });
      },
      onError: (error) => {
        console.error('Failed to update menu item:', error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 md:mt-0">
      <Input
        label={"MenuID"}
        type={"text"}
        value={menuId}
        onChange={(e) => setMenuId(e.target.value)}
        name={"MenuID"}
        id={"MenuID"}
        disabled
      />
      <Input
        label={"Depth"}
        type={"number"}
        value={depth}
        onChange={(e) => setDepth(e.target.value)}
        name={"Depth"}
        id={"Depth"}
        disabled
      />
      <Input
        label={"ParentData"}
        type={"text"}
        value={parentData}
        onChange={(e) => setParentData(e.target.value)}
        name={"ParentData"}
        disabled={!hasParent}
      />
      <Input
        label={"Name"}
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        name={"Name"}
      />
      <button className="bg-[#253BFF] text-white p-2 mt-4 rounded-2xl w-[20rem]">Save</button>
    </form>
  );
};

export default MenuForm;
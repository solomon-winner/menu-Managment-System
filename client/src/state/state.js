import { atom } from 'recoil';
import dummyMenus from '../data/dummyMenus'; 

export const menuState = atom({
  key: 'menuState',
  default: dummyMenus, 
});

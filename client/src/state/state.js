import { atom } from 'recoil';
import dummyMenus from '../utils/dummyMenus.js'; 

export const menuState = atom({
  key: 'menuState',
  default: dummyMenus, 
});

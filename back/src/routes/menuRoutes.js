import express from 'express';
import { getMenus, getMenu, addMenuItem, updateMenuItem, deleteMenuItem } from '../controllers/menuController.js';

const router = express.Router();

router.get('/', getMenus);
router.get('/:id', getMenu);
router.post('/', addMenuItem);
router.put('/:id', updateMenuItem);
router.delete('/:id', deleteMenuItem);

export default router;
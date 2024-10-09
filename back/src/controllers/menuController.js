import MenuItem from '../models/menuItem.js';
import ResponseHelper from '../utils/responseHelper.js';
import MenuDTO from '../DTOs/menuDTO.js';
import { populateChildren } from '../utils/populateHelper.js';
import createError from 'http-errors';

export const getMenus = async (req, res, next) => {
    try {
        const menus = await MenuItem.find();
        for (const menu of menus) {
            await populateChildren(menu);
        }
        const rootMenus = menus.filter(menu => !menu.parentId);
        const menuDTOs = MenuDTO.fromMenuItems(rootMenus);
        return ResponseHelper.success(res, 'Menus retrieved successfully', menuDTOs);
    } catch (error) {
        next(error);
    }
};

export const getMenu = async (req, res, next) => {
    const { id } = req.params;
    try {
        const menu = await MenuItem.findById(id);
        if (!menu) {
            return next(createError(404, 'Menu not found'));
        }
        await populateChildren(menu);
        const menuDTO = MenuDTO.fromMenuItem(menu);
        return ResponseHelper.success(res, 'Menu retrieved successfully', menuDTO);
    } catch (error) {
        next(error);
    }
};

export const addMenuItem = async (req, res, next) => {
    const { name, parentId, depth } = req.body;
    if (!name) {
        return next(createError(400, 'Name is required'));
    }
    console.log("add menu item", req.body)
    const newMenuItem = new MenuItem({ name, depth, parentId });

    try {
        const savedMenuItem = await newMenuItem.save();
        if (parentId) {
            const parent = await MenuItem.findById(parentId);
            if (!parent) {
                return next(createError(404, 'Parent menu not found'));
            }
            parent.children.push(savedMenuItem._id);
            await parent.save();
        }
        const menuDTO = MenuDTO.fromMenuItem(savedMenuItem);
        return ResponseHelper.success(res, 'Menu item added successfully', menuDTO, 201);
    } catch (error) {
        next(error);
    }
};

export const updateMenuItem = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return next(createError(400, 'Name is required'));
    }

    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(id, { name }, { new: true });
        if (!updatedMenuItem) {
            return next(createError(404, 'Menu item not found'));
        }

        const menuDTO = MenuDTO.fromMenuItem(updatedMenuItem);
        return ResponseHelper.success(res, 'Menu item updated successfully', menuDTO);
    } catch (error) {
        next(error);
    }
};

export const deleteMenuItem = async (req, res, next) => {
    const { id } = req.params;

    try {
        const menuItem = await MenuItem.findById(id);
        if (!menuItem) {
            return next(createError(404, 'Menu item not found'));
        }

        const deleteChildren = async (children) => {
            for (const childId of children) {
                const child = await MenuItem.findById(childId);
                if (child) {
                    await deleteChildren(child.children);
                    await MenuItem.findByIdAndDelete(childId);
                }
            }
        };

        await deleteChildren(menuItem.children);

        if (menuItem.parentId) {
            const parent = await MenuItem.findById(menuItem.parentId);
            if (parent) {
                parent.children.pull(menuItem._id);
                await parent.save();
            }
        }

        await MenuItem.findByIdAndDelete(id);
        return ResponseHelper.success(res, 'Menu item and its children deleted successfully');
    } catch (error) {
        next(error);
    }
};
import MenuItem from '../models/menuItem.js';
import ResponseHelper from '../utils/responseHelper.js';

export const getMenus = async (req, res, next) => {
    try {
        const menus = await MenuItem.find().populate('children');
        return ResponseHelper.success(res, 'Menus retrieved successfully', menus);
    } catch (error) {
        next(error);
    }
};

export const getMenu = async (req, res, next) => {
    const { id } = req.params;
    try {
        const menu = await MenuItem.findById(id).populate('children');
        if (!menu) {
            return next(new NotFoundError('Menu not found'));
        }
        return ResponseHelper.success(res, 'Menu retrieved successfully', menu);
    } catch (error) {
        next(error);
    }
};

export const addMenuItem = async (req, res, next) => {
    const { name, parentId } = req.body;
    const newMenuItem = new MenuItem({ name, parentId });

    try {
        const savedMenuItem = await newMenuItem.save();
        if (parentId) {
            const parent = await MenuItem.findById(parentId);
            if (!parent) {
                return next(new NotFoundError('Parent menu not found'));
            }
            parent.children.push(savedMenuItem._id);
            await parent.save();
        }
        return ResponseHelper.success(res, 'Menu item added successfully', savedMenuItem, 201);
    } catch (error) {
        next(error);
    }
};

export const updateMenuItem = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(id, { name }, { new: true });
        if (!updatedMenuItem) {
            return next(new NotFoundError('Menu item not found'));
        }
        return ResponseHelper.success(res, 'Menu item updated successfully', updatedMenuItem);
    } catch (error) {
        next(error);
    }
};

export const deleteMenuItem = async (req, res, next) => {
    const { id } = req.params;

    try {
        const menuItem = await MenuItem.findById(id);
        if (!menuItem) {
            return next(new NotFoundError('Menu item not found'));
        }
        if (menuItem.parentId) {
            const parent = await MenuItem.findById(menuItem.parentId);
            if (parent) {
                parent.children.pull(menuItem._id);
                await parent.save();
            }
        }
        await MenuItem.findByIdAndDelete(id);
        return ResponseHelper.success(res, 'Menu item deleted successfully');
    } catch (error) {
        next(error);
    }
};
import MenuItem from '../models/menuItem.js';
import ResponseHelper from '../utils/responseHelper.js';
import MenuDTO from '../DTOs/menuDTO.js';

export const getMenus = async (req, res, next) => {
    try {
        const menus = await MenuItem.find().populate('children');
        const menuDTOs = MenuDTO.fromMenuItems(menus);
        return ResponseHelper.success(res, 'Menus retrieved successfully', menuDTOs);
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
        const menuDTO = MenuDTO.fromMenuItem(menu);
        return ResponseHelper.success(res, 'Menu retrieved successfully', menuDTO);
    } catch (error) {
        next(error);
    }
};

export const addMenuItem = async (req, res, next) => {
    const { name, menuId, parentId, depth } = req.body;
    if (!name || !menuId) {
        return next(new BadRequest('Name is required'));
    }

    const newMenuItem = new MenuItem({ name, menuId, parentId, depth });

    try {
        if (parentId) {
            const parent = await MenuItem.findById(parentId);
            if (!parent) {
                return next(new NotFound('Parent menu not found'));
            }
            parent.children.push(menuId);
            await parent.save();
            return ResponseHelper.success(res, 'Menu item added successfully', menuDTO, 201);
        }
        const savedMenuItem = await newMenuItem.save();
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
        return next(new BadRequest('Name is required'));
    }

    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(id, { name }, { new: true });
        if (!updatedMenuItem) {
            return next(new NotFound('Menu item not found'));
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
            return next(new NotFound('Menu item not found'));
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
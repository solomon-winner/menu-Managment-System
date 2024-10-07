import MenuItem from '../models/menuItem.js';

export const getMenus = async (req, res) => {
    try {
        const menus = await MenuItem.find().populate('children');
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMenu = async (req, res) => {
    const { id } = req.params;
    try {
        const menu = await MenuItem.findById(id).populate('children');
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addMenuItem = async (req, res) => {
    const { name, parentId } = req.body;
    const newMenuItem = new MenuItem({ name, parentId });

    try {
        const savedMenuItem = await newMenuItem.save();
        if (parentId) {
            const parent = await MenuItem.findById(parentId);
            parent.children.push(savedMenuItem._id);
            await parent.save();
        }
        res.status(201).json(savedMenuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateMenuItem = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(id, { name }, { new: true });
        res.status(200).json(updatedMenuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteMenuItem = async (req, res) => {
    const { id } = req.params;

    try {
        const menuItem = await MenuItem.findById(id);
        if (menuItem.parentId) {
            const parent = await MenuItem.findById(menuItem.parentId);
            parent.children.pull(menuItem._id);
            await parent.save();
        }
        await MenuItem.findByIdAndDelete(id);
        res.status(200).json({ message: 'Menu item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
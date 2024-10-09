import MenuItem from '../models/menuItem.js';

export const populateChildren = async (menuItem) => {
    await menuItem.populate('children');
    for (const child of menuItem.children) {
        await populateChildren(child);
    }
};
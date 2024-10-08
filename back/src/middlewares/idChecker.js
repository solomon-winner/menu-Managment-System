import mongoose from 'mongoose';
import { BadRequestError } from '../helpers/errorHandler.js';

export const IdChecker = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new BadRequestError('Invalid ID'));
    }
    next();
};
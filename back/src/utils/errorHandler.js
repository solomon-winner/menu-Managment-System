import ResponseHelper from './responseHelper.js';
import createError from 'http-errors';
import { logger } from './logger.js'; 

const { NotFound, BadRequest } = createError;
export const errorHandler = (err, req, res, next) => {
    if (err instanceof NotFound) {
        return ResponseHelper.error(res, 'Resource not found', [], 404);
    }
    if (err instanceof BadRequest) {
        return ResponseHelper.error(res, err.message, [], err.statusCode);
    }

    logger.error(err.stack);

    if (process.env.NODE_ENV === 'development') {
        return ResponseHelper.error(res, err.message, [], 500);
    }

    return ResponseHelper.error(res, 'Internal server error', [], 500);
};


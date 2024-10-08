import ResponseHelper from './responseHelper.js';
import { ValidationError } from 'express-validation';
import pkg from 'http-errors';
import { logger } from './logger.js'; 

const { NotFoundError, UnauthorizedError, ForbiddenError, BadRequestError } = pkg;
export const errorHandler = (err, req, res, next) => {
    if (err instanceof NotFoundError) {
        return ResponseHelper.error(res, 'Resource not found', [], 404);
    }

    if (err instanceof ValidationError) {
        return ResponseHelper.error(res, 'Validation error', err.details, 422);
    }

    if (err instanceof UnauthorizedError || err instanceof ForbiddenError) {
        return ResponseHelper.error(res, 'This action is Unauthorized', [], 403);
    }

    if (err instanceof BadRequestError) {
        return ResponseHelper.error(res, err.message, [], err.statusCode);
    }

    if (err instanceof jwt.TokenExpiredError) {
        return ResponseHelper.error(res, 'Token is expired', [], 401);
    }

    if (err instanceof jwt.JsonWebTokenError) {
        return ResponseHelper.error(res, 'Token is invalid', [], 401);
    }

    if (err instanceof jwt.NotBeforeError) {
        return ResponseHelper.error(res, 'Token is not active', [], 401);
    }
    logger.error(err.stack);

    if (process.env.NODE_ENV === 'development') {
        return ResponseHelper.error(res, err.message, [], 500);
    }

    return ResponseHelper.error(res, 'Internal server error', [], 500);
};


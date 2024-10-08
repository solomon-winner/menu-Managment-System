import express from 'express';
import { getMenus, getMenu, addMenuItem, updateMenuItem, deleteMenuItem } from '../controllers/menuController.js';

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Menu:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the menu
 *         name:
 *           type: string
 *           description: The name of the menu
 *         parentId:
 *           type: string
 *           description: The id of the parent menu
 *         children:
 *           type: array
 *           items:
 *             type: string
 *           description: The ids of the child menus
 *       example:
 *         id: d5fE_asz
 *         name: Main Menu
 *         parentId: null
 *         children: []
 */


/**
 * @swagger
 * tags:
 *   name: Menus
 *   description: The menu managing API
 */


/**
 * @swagger
 * /menus:
 *   get:
 *     summary: Returns the list of all the menus
 *     tags: [Menus]
 *     responses:
 *       200:
 *         description: The list of the menus
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Menu'
 */

router.get('/', getMenus);

/**
 * @swagger
 * /menus/{id}:
 *   get:
 *     summary: Get a menu by id
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu id
 *     responses:
 *       200:
 *         description: The menu description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       404:
 *         description: The menu was not found
 */

router.get('/:id', getMenu);


/**
 * @swagger
 * /menus:
 *   post:
 *     summary: Create a new menu
 *     tags: [Menus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Menu'
 *     responses:
 *       201:
 *         description: The menu was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       400:
 *         description: Bad request
 */
router.post('/', addMenuItem);
/**
 * @swagger
 * /menus/{id}:
 *   put:
 *     summary: Update a menu by id
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Menu'
 *     responses:
 *       200:
 *         description: The menu was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       404:
 *         description: The menu was not found
 *       400:
 *         description: Bad request
 */
router.put('/:id', updateMenuItem);
/**
 * @swagger
 * /menus/{id}:
 *   delete:
 *     summary: Delete a menu by id
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu id
 *     responses:
 *       200:
 *         description: The menu was successfully deleted
 *       404:
 *         description: The menu was not found
 */
router.delete('/:id', deleteMenuItem);

export default router;
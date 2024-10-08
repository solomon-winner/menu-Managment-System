import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Menu Management System API',
      version: '1.0.0',
      description: 'API documentation for the Menu Management System',
    },
    servers: [
      {
        url: 'https://menu-managment-system.onrender.com/api',
      },
    ],
  },
  apis: ['./src/routes/*.js'], 
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export default swaggerDocs;
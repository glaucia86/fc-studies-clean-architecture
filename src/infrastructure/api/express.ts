/**
 * file: src/infrastructure/api/express.ts
 * description: file responsible for external API integration with Express.js
 * data: 04/01/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express, { Express } from 'express';
import { Sequelize } from 'sequelize-typescript';
import CustomerModel from '../customer/repository/sequelize/customer.model';
import ProductModel from '../product/repository/sequelize/product.model';
import { customerRoute } from './routes/customer.route';
import { productRoute } from './routes/product.route';

export const app: Express = express();
app.use(express.json());
app.use('/customer', customerRoute);
app.use('/products', productRoute);

app.use(express.urlencoded({ extended: true }));

export let sequelize: Sequelize;

async function setupDb() {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
  });

  await sequelize.addModels([
    CustomerModel,
    ProductModel
  ]);
  await sequelize.sync();
}

setupDb();
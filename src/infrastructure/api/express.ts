/**
 * file: src/infrastructure/api/express.ts
 * description: file responsible for external API integration with Express.js
 * data: 04/01/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express, { Express } from 'express';
import { Sequelize } from 'sequelize-typescript';
import CustomerModel from '../customer/repository/sequelize/customer.model';

export const app: Express = express();
app.use(express.json());

export let sequelize: Sequelize;

async function setupDb() {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory',
    logging: false,
  });

  await sequelize.addModels([CustomerModel]);
  await sequelize.sync();
}

setupDb();
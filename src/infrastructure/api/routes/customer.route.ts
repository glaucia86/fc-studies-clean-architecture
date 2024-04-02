/**
 * file: src/infrastructure/api/routes/customer.route.ts
 * description: file responsible for the Customer routes
 * data: 04/02/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express, { Request, Response } from 'express';
import CustomerCreateUseCase from '../../../usecase/customer/create/create.customer.usecase';
import CustomerRepository from '../../customer/repository/sequelize/customer.repository';

export const customerRoute = express.Router();

customerRoute.post('/', async (req: Request, res: Response) => {
  const useCase = new CustomerCreateUseCase(new CustomerRepository());

  try {
    const customerDto = {
      name: req.body.name,
      address: {
        street: req.body.address.street,
        city: req.body.address.city,
        number: req.body.address.number,
        zip: req.body.address.zip,
      },
    }

    const outPut = await useCase.execute(customerDto);
    res.send(outPut);
  } catch (error) {
    res.status(500).send(error);
  }
});
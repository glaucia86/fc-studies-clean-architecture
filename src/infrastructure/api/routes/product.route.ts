/**
 * file: src/infrastructure/api/routes/product.route.ts
 * description: file responsible for the Product routes
 * data: 04/02/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express, { Request, Response } from 'express';
import CreateProductUseCase from '../../../usecase/product/create/create.product.usecase';
import ProductRepository from '../../product/repository/sequelize/product.repository';
import ListProductUseCase from '../../../usecase/product/list/list.product.usecase';

export const productRoute = express.Router();

productRoute.post('/', async (req: Request, res: Response) => {
  const useCase = new CreateProductUseCase(new ProductRepository());

  try {
    const productDto = {
      name: req.body.name,
      price: req.body.price,
      type: req.body.type,
    }

    const outPut = await useCase.execute(productDto);
    res.send(outPut);
  } catch (error) {
    res.status(500).send(error);
  }
});

productRoute.get('/', async (req: Request, res: Response) => {
  const useCase = new ListProductUseCase(new ProductRepository());

  try {
    const outPut = await useCase.execute({});
    res.send(outPut);
  } catch (error) {
    res.status(500).send(error);
  }
});
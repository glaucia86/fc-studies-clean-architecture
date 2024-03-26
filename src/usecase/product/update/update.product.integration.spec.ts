/**
 * file: src/usecase/product/update/update.product.unit.spec.ts
 * description: file responsible for the dto of the customer update use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import UpdateProductUseCase from "./update.product.usecase";
import ProductFactory from "../../../domain/product/factory/product.factory";

describe("Unit test update product use case", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel])
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should update a product", async () => {
    const productRepository = new ProductRepository()
    const productUpdateUseCase = new UpdateProductUseCase(productRepository)

    const product = ProductFactory.create('a', 'Product 1', 10.0)
    await productRepository.create(product);

    const input = {
      id: product.id,
      name: 'Product 2',
      price: 20.0
    }

    const result = await productUpdateUseCase.execute(input)

    expect(result).toStrictEqual(input);
  });
});
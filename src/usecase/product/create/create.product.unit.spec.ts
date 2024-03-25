/**
 * file: src/usecase/product/create/create.product.unit.spec.ts
 * description: file responsible for the unit test of the product create use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import CreateProductUseCase from "./create.product.usecase";

const input = {
  type: 'a',
  name: 'Product 1',
  price: 100.00
};

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn()
  }
};

describe("Unit Test create product use case", () => {

  it("should create a product", async () => {
    const productRepository = MockRepository();
    const createProductUseCase = new CreateProductUseCase(productRepository);

    //const output = await createProductUseCase.execute(input);
    const output = await createProductUseCase.execute(input);

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      price: input.price
    });
  });
});
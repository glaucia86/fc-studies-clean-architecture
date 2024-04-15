/**
 * file: src/usecase/product/update/update.product.unit.spec.ts
 * description: file responsible for the dto of the customer update use case.
 * data: 04/15/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Product from "../../../domain/product/entity/product";
import UpdateProductUseCase from "./update.product.usecase";

//const product = ProductFactory.create('a', 'Product 1', 10.0);

const productId = "1";
const createProduct = () => {
  return new Product(productId, 'Product 1', 10.0);
}

const input = {
  id: productId,
  name: 'Product 1 Updated',
  price: 20.0
}

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn()
  }
}

describe("Unit test update product use case", () => {
  it("should update a product", async () => {
    const productRepository = MockRepository();
    productRepository.find = jest.fn().mockReturnValue(Promise.resolve(createProduct()));
    const useCase = new UpdateProductUseCase(productRepository);

    const productUpdated = await useCase.execute(input);
    expect(productUpdated).toEqual(input);
  });

  it("should throw error when product not found", async () => {
    const productRepository = MockRepository();
    productRepository.find.mockImplementation(() => {
      throw new Error("Product not found");
    });

    const useCase = new UpdateProductUseCase(productRepository);

    expect(() => {
      return useCase.execute(input);
    }).rejects.toThrowError("Product not found");
  });

  it("should throw an error when name is missing", async () => {
    const productRepository = MockRepository();
    productRepository.find = jest.fn().mockReturnValue(Promise.resolve(createProduct()));
    const useCase = new UpdateProductUseCase(productRepository);

    input.name = 'Product price less than zero';
    input.price = -1;

    await expect(useCase.execute(input)).rejects.toThrowError("product: Price must be greater than zero");
  });
});

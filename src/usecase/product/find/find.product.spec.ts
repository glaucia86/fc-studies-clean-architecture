/**
 * file: src/usecase/product/find/find.product.usecase.ts
 * description: file responsible for the use case of the product find use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Product from "../../../domain/product/entity/product";
import FindProductUseCase from "./find.product.usecase";

const product = new Product("123", "Product 1", 100.00);

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn()
  }
}

describe("Unit Test find product use case", () => {

  it("should find a product", async () => {
    const productRepository = MockRepository();
    const useCase = new FindProductUseCase(productRepository);

    const input = {
      id: "123"
    };

    const output = {
      id: "123",
      name: "Product 1",
      price: 100.00
    };

    const result = await useCase.execute(input);

    expect(result).toEqual(output);
  });

  it("should not find a product", async () => {
    const productRepository = MockRepository();
    productRepository.find.mockImplementation(() => {
      throw new Error("Product not found");
    });

    const useCase = new FindProductUseCase(productRepository);

    const input = {
      id: "123"
    };

    expect(() => {
      return useCase.execute(input);
    }).rejects.toThrow("Product not found");
  });
});
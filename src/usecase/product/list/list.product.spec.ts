/**
 * file: src/usecase/customer/list/list.customer.unit.spec.ts
 * description: file responsible for the unit test of the customer list use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import ProductFactory from "../../../domain/product/factory/product.factory";
import ListProductUseCase from "./list.product.usecase";

const product1 = ProductFactory.create(
  "a",
  "Product 1",
  100
);

const product2 = ProductFactory.create(
  "b",
  "Product 2",
  200
);

const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([product1, product2])),
  };
};

describe("Unit test for listing customer use case", () => {

  it("should list a customer", async () => {
    const productRepository = MockRepository();
    const listProductUseCase = new ListProductUseCase(productRepository);

    const output = await listProductUseCase.execute({});

    expect(output.products.length).toBe(2)
    expect(output.products[0].id).toBe(product1.id)
    expect(output.products[0].name).toBe(product1.name)
    expect(output.products[0].price).toBe(product1.price)
    
    expect(output.products[1].id).toBe(product2.id)
    expect(output.products[1].name).toBe(product2.name)
    expect(output.products[1].price).toBe(product2.price)
  });
});
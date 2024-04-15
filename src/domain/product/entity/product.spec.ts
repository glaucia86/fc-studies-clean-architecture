/**
 * file: src/domain/product/entity/product.spec.ts
 * description: file responsible for test the Product class
 * data: 10/20/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Product from "./product";

describe("Product unit tests", () => {
  it("should return throw error when 'id' is empty", () => {
    expect(() => {
      new Product("", "mobile", 100);
    }).toThrowError("product: Id is required");
  });

  it("should return throw error when 'Product name' is empty", () => {
    expect(() => {
      new Product("1", "", 100);
    }).toThrowError("product: Name is required");
  });

  it("should return throw error when 'Product Price' is less than zero", () => {
    expect(() => {
      new Product("1", "mobile", -1);
    }).toThrowError("product: Price must be greater than zero");
  });

  it("should change Product Name", () => {
    expect(() => {
      const product = new Product("1", "mobile", 100);
      product.changeProductName("TV");

      expect(product.name).toBe("TV");
    })
  });

  it("should change Product Price", () => {
    expect(() => {
      const product = new Product("1", "mobile", 100);
      product.changeProductPrice(200)

      expect(product.price).toBe(200);
    })
  });

  it("should throw error when product is invalid", () => {
    expect(() => {
      new Product("", "", -1);
    }).toThrowError("product: Id is required,product: Name is required,product: Price must be greater than zero");
  });
});

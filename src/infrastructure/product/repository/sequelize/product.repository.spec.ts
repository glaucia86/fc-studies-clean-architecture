/**
 * file: src/infrastructure/product/repository/sequelize/product.repository.spec.ts
 * description: file responsible for the Product Repository Test
 * data: 11/15/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Sequelize } from "sequelize-typescript";
import ProductModel from "./product.model";
import Product from "../../../../domain/product/entity/product";
import ProductRepository from "./product.repository";

describe("Product Repository Tests", () => {

  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("Should create a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 01", 10);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 01",
      price: 10,
    });
  });

  it("Should update a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 01", 10);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 01",
      price: 10,
    });

    product.changeProductName("Product 02");
    product.changeProductPrice(200);

    await productRepository.update(product);

    const productModelUpdated = await ProductModel.findOne({ where: { id: "1" } });

    expect(productModelUpdated.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 02",
      price: 200,
    });
  });

  it("Should find a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 01", 10);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    const productFinded = await productRepository.find("1");

    expect(productModel.toJSON()).toStrictEqual({
      id: productFinded.id,
      name: productFinded.name,
      price: productFinded.price,
    });
  });

  it("Should find all products", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 01", 10);
    await productRepository.create(product);

    const product2 = new Product("2", "Product 02", 20);
    await productRepository.create(product2);

    const foundProducts = await productRepository.findAll();
    const products = [product, product2];

    expect(products).toEqual(foundProducts);

  });

});
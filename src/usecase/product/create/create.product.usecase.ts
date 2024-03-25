/**
 * file: src/usecase/product/create/create.product.usecase.ts
 * description: file responsible for the dto of the product create use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import ProductFactory from "../../../domain/product/factory/product.factory";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { InputCreateProductDto, OutputProductDto } from "./create.product.dto";

export default class CreateProductUseCase {
  private productRepository: ProductRepositoryInterface;

  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository;
  }

  async execute(input: InputCreateProductDto): Promise<OutputProductDto> {
    const product = ProductFactory.create(input.type, input.name, input.price);

    await this.productRepository.create(product);

    return {
      id: product.id,
      name: product.name,
      price: product.price
    };
  }
}
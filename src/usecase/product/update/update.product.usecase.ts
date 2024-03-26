/**
 * file: src/usecase/product/update/update.product.usecase.ts
 * description: file responsible for the dto of the product update use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { InputUpdateProductDto, OutputUpdateProductDto } from "./update.product.dto";

export default class UpdateProductUseCase {
  private productRepository: ProductRepositoryInterface;

  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository;
  }

  async execute(input: InputUpdateProductDto): Promise<OutputUpdateProductDto> {
    const product = await this.productRepository.find(input.id)

    product.changeProductName(input.name)
    product.changeProductPrice(input.price)

    return {
      id: product.id,
      name: product.name,
      price: product.price
    }
  }
}
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * file: src/usecase/product/list/list.product.usecase.ts
 * description: file responsible for the dto of the product list use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import ProductInterface from "../../../domain/product/entity/product.interface";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { InputListProductDto, OutputListProductDto } from "./list.product.dto";

export default class ListProductUseCase {
  private productRepository: ProductRepositoryInterface

  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository
  }

  async execute(input: InputListProductDto = {}): Promise<OutputListProductDto> {
    const products = await this.productRepository.findAll()

    return OutputMapper.toOutput(products)
  }
}

class OutputMapper {
  static toOutput(products: ProductInterface[]): OutputListProductDto {
    return {
      products: products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
      })),
    };
  }
}


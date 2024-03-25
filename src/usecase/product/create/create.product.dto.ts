/**
 * file: src/usecase/product/create/create.product.dto.ts
 * description: file responsible for the dto of the product create use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export interface InputCreateProductDto {
  type: string;
  name: string;
  price: number;
}

export interface OutputProductDto {
  id: string;
  name: string;
  price: number;
}
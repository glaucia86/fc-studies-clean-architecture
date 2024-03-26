/**
 * file: src/usecase/product/update/update.product.dto.ts
 * description: file responsible for the dto of the product update use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export interface InputUpdateProductDto {
  id: string;
  name: string;
  price: number;
}

export interface OutputUpdateProductDto {
  id: string;
  name: string;
  price: number;
}

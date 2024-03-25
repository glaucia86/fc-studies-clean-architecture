/**
 * file: src/usecase/product/find/find.product.dto.ts
 * description: file responsible for the dto of the product find use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export interface InputFindProductDto {
  id: string;
}

// id: string, name: string, price: number
export interface OutputFindProductDto {
  id: string;
  name: string;
  price: number;
}
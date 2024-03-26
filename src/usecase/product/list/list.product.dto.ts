/**
 * file: src/usecase/product/list/list.product.dto.ts
 * description: file responsible for the dto of the product list use case.
 * data: 03/25/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

type Product = {
  id: string;
  name: string;
  price: number;
};

export interface InputListProductDto { }

export interface OutputListProductDto {
  products: Product[];
}
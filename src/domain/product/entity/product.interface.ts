/**
 * file: src/domain/product/entity/product.interface.ts
 * description: file responsible for 
 * data: 12/13/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default interface ProductInterface {
  get id(): string;
  get name(): string;
  get price(): number;
}
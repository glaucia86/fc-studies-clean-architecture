/**
 * file: src/domain/product/service/product.service.ts
 * description: file responsible for the 'ProductService' class
 * data: 10/25/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Product from "../entity/product";

export default class ProductService {

  static increaseProductPrice(products: Product[], percentage: number): Product[] {
    products.forEach(product => {
      product.changeProductPrice((product.price * percentage / 100 + product.price));
    });

    return products;
  }
}
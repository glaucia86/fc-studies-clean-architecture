/**
 * file: src/domain/product/repository/product-repository.interface.ts
 * description: file responsible for the Product Repository Interface
 * data: 11/15/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import RepositoryInterface from "../../@shared/repository/repository-interface";
import ProductInterface from "../entity/product.interface";

export default interface ProductRepositoryInterface
  extends RepositoryInterface<ProductInterface> { }
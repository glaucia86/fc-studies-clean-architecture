/**
 * file: src/domain/product/factory/product.validator.factory.ts
 * description: file responsible for the Product Validator Factory
 * data: 04/18/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import ValidatorInterface from "../../validator/validator.interface";
import Product from "../entity/product";
import ProductYupValidator from "../validator/product.yup.validator";

export default class ProductValidatorFactory {
  static createValidator(): ValidatorInterface<Product> {
    return new ProductYupValidator();
  }
}
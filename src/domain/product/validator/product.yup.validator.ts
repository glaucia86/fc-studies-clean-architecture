/**
 * file: src/domain/product/validator/product.yup.validator.ts
 * description: file responsible for the Product Yup Validator
 * data: 04/18/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import ValidatorInterface from "../../validator/validator.interface";
import Product from "../entity/product";
import * as yup from 'yup';

export default class ProductYupValidator implements ValidatorInterface<Product> {
  validate(entity: Product): void {
    try {
      yup
        .object()
        .shape({
          id: yup.string().required("Id is required"),
          name: yup.string().required("Name is required"),
          price: yup.number().moreThan(0, "Price must be greater than zero").required(),
        })
        .validateSync(
          {
            id: entity.id,
            name: entity.name,
            price: entity.price,
          }, {
          abortEarly: false
        });
    } catch (error) {
      const err = error as yup.ValidationError;
      err.errors.forEach((error) => {
        entity.notification.addError({
          context: "product",
          message: error
        })
      })
    }
  }
}
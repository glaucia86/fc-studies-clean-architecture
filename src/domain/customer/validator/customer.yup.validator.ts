/**
 * file: src/domain/customer/validator/customer.yup.validator.ts
 * description: file responsible for the Customer Yup Validator
 * data: 04/18/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import ValidatorInterface from "../../validator/validator.interface";
import Customer from "../entity/customer";
import * as yup from 'yup';

export default class CustomerYupValidator implements ValidatorInterface<Customer> {
  validate(entity: Customer): void {
    try {
      yup
        .object()
        .shape({
          id: yup.string().required("Id is required"),
          name: yup.string().required("Name is required")
        })
        .validateSync(
          {
            id: entity.id,
            name: entity.name,
          }, {
          abortEarly: false,
        });

    } catch (error) {
      const err = error as yup.ValidationError;
      err.errors.forEach((error) => {
        entity.notification.addError({
          context: "customer",
          message: error,
        });
      });
    }
  }
}
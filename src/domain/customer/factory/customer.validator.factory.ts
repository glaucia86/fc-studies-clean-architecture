/**
 * file: src/domain/customer/factory/customer.validator.factory.ts
 * description: file responsible for the Customer Validator Factory
 * data: 04/18/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import ValidatorInterface from "../../validator/validator.interface";
import Customer from "../entity/customer";
import CustomerYupValidator from "../validator/customer.yup.validator";

export default class CustomerValidatorFactory {
  static createValidator(): ValidatorInterface<Customer> {
    return new CustomerYupValidator();
  }
}
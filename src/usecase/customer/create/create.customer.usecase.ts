/**
 * file: src/usecase/customer/create/create.customer.usecase.ts
 * description: file responsible for the dto of the customer create use case.
 * data: 03/19/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import CustomerFactory from "../../../domain/customer/factory/customer.factory";
import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import Address from "../../../domain/customer/value-object/address";
import { InputCreateCustomerDto, OutputCreateCustomerDto } from "./create.customer.dto";

export default class CustomerCreateUseCase {
  private customerRepository: CustomerRepositoryInterface;

  constructor(customerRepository: CustomerRepositoryInterface) {
    this.customerRepository = customerRepository;
  }

  async execute(input: InputCreateCustomerDto): Promise<OutputCreateCustomerDto> {
    const customer = CustomerFactory.createWithAddress(input.name, new Address(
      input.address.street,
      input.address.number,
      input.address.zip,
      input.address.city
    ));

    await this.customerRepository.create(customer);

    return {
      id: customer.id,
      name: customer.name,
      address: {
        street: customer.Address.street,
        number: customer.Address.number,
        zip: customer.Address.zip,
        city: customer.Address.city
      },
    };
  }
}
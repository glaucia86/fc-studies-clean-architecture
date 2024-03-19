/**
 * file: src/usecase/customer/update/update.customer.usecase.ts
 * description: file responsible for the dto of the customer create use case.
 * data: 03/19/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import Address from "../../../domain/customer/value-object/address";
import { InputUpdateCustomerDto, OutputUpdateCustomerDto } from "./update.customer.dto";

export default class UpdateCustomerUseCase {
  private customerRepository: CustomerRepositoryInterface;

  constructor(customerRepository: CustomerRepositoryInterface) {
    this.customerRepository = customerRepository;
  }

  async execute(input: InputUpdateCustomerDto): Promise<OutputUpdateCustomerDto> {
    const customer = await this.customerRepository.find(input.id);

    customer.changeName(input.name)
    customer.changeAddress(
      new Address(
        input.address.street,
        input.address.number,
        input.address.zip,
        input.address.city
      ));

    await this.customerRepository.update(customer);

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
/**
 * file: src/usecase/customer/find/find.customer.usecase.ts
 * description: file responsible for the dto of the customer find use case.
 * data: 03/11/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import { InputFindCustomerDto, OutputFindCustomerDto } from "./find.customer.usecase.dto";

export default class FindCustomerUseCase {
  private customerRepository: CustomerRepositoryInterface;

  constructor(customerRepository: CustomerRepositoryInterface) {
    this.customerRepository = customerRepository;
  }

  async execute(input: InputFindCustomerDto): Promise<OutputFindCustomerDto> {
    const customer = await this.customerRepository.find(input.id);

    // street: string, number: number, zip: string, city: string
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

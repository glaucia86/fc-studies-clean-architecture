/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * file: src/usecase/customer/list/list.customer.unit.spec.ts
 * description: file responsible for the unit test of the customer list use case.
 * data: 03/21/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Customer from "../../../domain/customer/entity/customer";
import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import { InputListCustomerDto, OutputListCustomerDto } from "./list.customer.dto";

export default class ListCustomerUseCase {
  private customerRepository: CustomerRepositoryInterface;

  constructor(CustomerRepository: CustomerRepositoryInterface) {
    this.customerRepository = CustomerRepository;
  }

  async execute(input: InputListCustomerDto): Promise<OutputListCustomerDto> {
    const customers = await this.customerRepository.findAll();

    return OutputMapper.toOutput(customers);
  }
}

class OutputMapper {
  static toOutput(customer: Customer[]): OutputListCustomerDto {
    return {
      customers: customer.map((customer) => ({
        id: customer.id,
        name: customer.name,
        address: {
          street: customer.Address.street,
          number: customer.Address.number,
          zip: customer.Address.zip,
          city: customer.Address.city,
        },
      })),
    };
  }
}
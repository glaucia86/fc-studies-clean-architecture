/**
 * file: src/usecase/customer/list/list.customer.dto.ts
 * description: file responsible for the dto of the customer find use case.
 * data: 03/21/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

type Customer = {
  id: string;
  name: string;
  address: {
    street: string;
    number: number;
    zip: string;
    city: string;
  }
}

export interface InputListCustomerDto { }

export interface OutputListCustomerDto {
  customers: Customer[];
}
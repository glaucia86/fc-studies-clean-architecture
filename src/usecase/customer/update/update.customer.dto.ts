/**
 * file: src/usecase/customer/update/update.customer.dto.ts
 * description: file responsible for the dto of the customer update use case.
 * data: 03/19/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export interface InputUpdateCustomerDto {
  id: string;
  name: string;
  address: {
    street: string;
    number: number;
    zip: string;
    city: string;
  };
}

export interface OutputUpdateCustomerDto {
  id: string;
  name: string;
  address: {
    street: string;
    number: number;
    zip: string;
    city: string;
  };
}
/**
 * file: src/usecase/customer/create/create.customer.dto.ts
 * description: file responsible for the dto of the customer create use case.
 * data: 03/18/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export interface InputCreateCustomerDto {
  name: string;
  address: {
    street: string;
    number: number;
    zip: string;
    city: string;
  }
}

export interface OutputCreateCustomerDto {
  id: string;
  name: string;
  address: {
    street: string;
    number: number;
    zip: string;
    city: string;
  };
}
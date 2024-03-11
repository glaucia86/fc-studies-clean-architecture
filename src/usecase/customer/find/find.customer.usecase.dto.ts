/**
 * file: src/usecase/customer/find/find.customer.dto.ts
 * description: file responsible for the dto of the customer find use case.
 * data: 03/11/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export interface InputFindCustomerDto {
  id: string;
}

//street: string, number: number, zip: string, city: string
export interface OutputFindCustomerDto {
  id: string;
  name: string;
  address: {
    street: string;
    number: number;
    zip: string;
    city: string;
  }
}
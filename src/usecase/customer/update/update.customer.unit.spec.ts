/**
 * file: src/usecase/customer/update/update.customer.unit.spec.ts
 * description: file responsible for the dto of the customer update use case.
 * data: 03/19/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import CustomerFactory from "../../../domain/customer/factory/customer.factory";
import Address from "../../../domain/customer/value-object/address";
import UpdateCustomerUseCase from "./update.customer.usecase";

const customer = CustomerFactory.createWithAddress(
  'Glaucia Lemos',
  new Address('Rua das Flores', 123, '12345-678', 'Rio de Janeiro')
);

const input = {
  id: customer.id,
  name: 'Glaucia Updated',
  address: {
    street: 'Street Updated',
    number: 1234,
    zip: '12345-679',
    city: 'Rio de Janeiro Updated'
  },
};

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(customer)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn()
  }
};

describe("Unit Test update customer use case", () => {
  it("should update a customer", async () => {
    const customerRepository = MockRepository();
    const customerUpdateUseCase = new UpdateCustomerUseCase(customerRepository);

    const output = await customerUpdateUseCase.execute(input);

    expect(output).toEqual(input);
  });
});
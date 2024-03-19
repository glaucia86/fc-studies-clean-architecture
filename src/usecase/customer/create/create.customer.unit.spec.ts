/**
 * file: src/usecase/customer/create/create.customer.unit.spec.ts
 * description: file responsible for the dto of the customer create use case.
 * data: 03/19/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import CustomerCreateUseCase from "./create.customer.usecase";

const input = {
  name: 'Glaucia Lemos',
  address: {
    street: 'Rua das Flores',
    number: 123,
    zip: '12345-678',
    city: 'Rio de Janeiro'
  },
};

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn()
  }
};

describe("Unit Test create customer use case", () => {
  it("should create a customer", async () => {
    const customerRepository = MockRepository();
    const customerCreateUseCase = new CustomerCreateUseCase(customerRepository);

    const output = await customerCreateUseCase.execute(input);

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      address: {
        street: input.address.street,
        number: input.address.number,
        zip: input.address.zip,
        city: input.address.city
      },
    });
  });
});

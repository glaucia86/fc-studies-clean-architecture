/**
 * file: src/usecase/customer/find/find.customer.unit.spec.ts
 * description: file responsible for the unit test of the customer find use case.
 * data: 03/18/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Customer from "../../../domain/customer/entity/customer";
import Address from "../../../domain/customer/value-object/address";
import FindCustomerUseCase from "./find.customer.usecase";

const customer = new Customer("123", "John Doe");
const address = new Address("Main Street", 123, "12345-678", "Springfield");
customer.changeAddress(address);

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(customer)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn()
  }
}

describe("Unit Test find customer use case", () => {

  it("should find a customer", async () => {
    const customerRepository = MockRepository();
    const useCase = new FindCustomerUseCase(customerRepository);

    const input = {
      id: "123"
    };

    // o resultado esperado deve ser igual do que foi encontrado no 'id' do input
    const output = {
      id: "123",
      name: "John Doe",
      address: {
        street: "Main Street",
        number: 123,
        zip: "12345-678",
        city: "Springfield"
      }
    };

    const result = await useCase.execute(input);

    expect(result).toEqual(output);

  });

  it("should not find a customer", async() => {
    const customerRepository = MockRepository();
    customerRepository.find.mockImplementation(() => {
      throw new Error("Customer not found");
    });

    const useCase = new FindCustomerUseCase(customerRepository);

    const input = {
      id: "123"
    };

    expect(() => {
      return useCase.execute(input)
    }).rejects.toThrow("Customer not found");
  })
});
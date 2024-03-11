/**
 * file: src/usecase/customer/find/find.customer.spec.ts
 * description: file responsible for the dto of the customer find use case.
 * data: 03/11/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */


import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../../infrastructure/customer/repository/sequelize/customer.model";
import CustomerRepository from "../../../infrastructure/customer/repository/sequelize/customer.repository";
import Customer from "../../../domain/customer/entity/customer";
import Address from "../../../domain/customer/value-object/address";
import FindCustomerUseCase from "./find.customer.usecase";

describe("Test find customer use case", () => {

  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([CustomerModel])
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should find a customer", async () => {

    const customerRepository = new CustomerRepository();
    const useCase = new FindCustomerUseCase(customerRepository);

    const customer = new Customer("123", "John Doe");
    const address = new Address("Main Street", 123, "12345-678", "Springfield");
    customer.changeAddress(address);

    await customerRepository.create(customer);

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

    const result = useCase.execute(input);

    expect(result).toEqual(output);

  });
});
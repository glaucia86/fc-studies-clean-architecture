/**
 * file: src/domain/customer/factory/customer.factory.spec.ts
 * description: file responsible for the Customer class tests
 * data: 12/13/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe('Customer factory unit test', () => {

  it('should create a customer', () => {
    const customer = CustomerFactory.create("Glaucia");

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Glaucia");
    expect(customer.Address).toBeUndefined();
  });

  it('should create a customer with address', () => {

    const address = new Address("Rua dos Bobos", 2233, "2222-000", "Rio de Janeiro");
    const customer = CustomerFactory.createWithAddress("Glaucia", address);

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Glaucia");
    expect(customer.Address).toBe(address);
  });
});
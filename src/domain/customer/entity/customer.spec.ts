/**
 * file: src/domain/customer/entity/customer.spec.ts
 * description: file responsible for test the Customer class
 * data: 10/16/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Address from "../value-object/address";
import Customer from "./customer";

describe("Customer unit tests", () => {

  it("should throw an error when 'id' is empty", () => {
    expect(() => {
      new Customer("", "Glaucia Lemos");
    }).toThrowError("Id is required");
  });

  it("should throw an error when 'name' is empty", () => {
    expect(() => {
      new Customer("1234", "");
    }).toThrowError("Name is required");
  });

  it("should change Customer name", () => {
    // Arrange
    const customer = new Customer("1234", "Glaucia Lemos");

    // Act
    customer.changeName("Jurema Lemos");

    // Assert
    expect(customer.name).toBe("Jurema Lemos");
  });

  // Para ativar o cliente se faz necessário saber o endereço do 'Customer'
  it("should activate Customer", () => {

    const customer = new Customer("1", "Customer 1");
    const address = new Address("Rua 7 de Setembro", 700, "Rio de Janeiro", "20000-000");
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBeTruthy();
  });

  it("should deactivate Customer", () => {

    const customer = new Customer("1", "Customer 1");

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should return an error if Customer 'address' is undefined when you activate a Customer", () => {
    expect(() => {
      const customer = new Customer("1", "Customer 1");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("should add reward points", () => {
    const customer = new Customer("customer-id-01", "customer-name-01");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});

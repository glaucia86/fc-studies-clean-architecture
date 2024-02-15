/**
 * file: src/domain/checkout/entity/order.spec.ts
 * description: file responsible for test the Order class
 * data: 10/20/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should return throw error when 'id' is empty", () => {
    expect(() => {
      new Order("", "1", []);
    }).toThrowError("Invalid param: id");
  });

  it("should return throw error when 'Customer id' is empty", () => {
    expect(() => {
      new Order("1", "", []);
    }).toThrowError("Invalid param: customerId");
  });

  it("should return throw error when 'Order item' is empty", () => {
    expect(() => {
      new Order("1", "1", []);
    }).toThrowError("Items are required");
  });

  it("should calculate total order", () => {

    const item1 = new OrderItem("1", "mobile", 100, 2, "product_1");
    const item2 = new OrderItem("2", "mouse", 200, 2, "product_2");
    const order = new Order("order-1", "customer-1", [item1]);

    let total = order.total();
    expect(total).toBe(200);

    const order2 = new Order("order-1", "customer-1", [item1, item2]);
    total = order2.total();
    expect(total).toBe(600);
  });

  it("should throw error if the item quantity is less or equal to zero", () => {
    expect(() => {
      const item1 = new OrderItem("1", "mobile", 100, -1, "product_1");
      const order = new Order("order-1", "customer-1", [item1]);
      order.total();
    }).toThrowError("Quantity must be greater than zero");
  });
});
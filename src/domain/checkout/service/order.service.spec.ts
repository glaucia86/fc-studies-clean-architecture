/**
 * file: src/domain/checkout/service/order.service.spec.ts
 * description: file responsible for test the 'OrderService' class
 * data: 10/28/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Customer from '../../customer/entity/customer'
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {

  it("should place an order", () => {

    const customer_01 = new Customer("customer_1", "customer-name-01");
    const item_01 = new OrderItem("id_1", "item-name-01", 10, 1, "prod-id-01");

    const totalOrder = OrderService.placeOrder(customer_01, [item_01]);

    expect(customer_01.rewardPoints).toBe(5);
    expect(totalOrder.total()).toBe(10);
  });

  it("should get total of all orders ", () => {

    const item_01 = new OrderItem("id_1", "item-name-01", 100, 1, "prod-id-01");
    const item_02 = new OrderItem("id_2", "item-name-02", 200, 2, "prod-id-02");

    const order_01 = new Order("id_1", "customer-01", [item_01]);
    const order_02 = new Order("id_2", "customer-02", [item_02]);

    const total = OrderService.totalOrders([order_01, order_02]);

    expect(total).toBe(500);

  });
});

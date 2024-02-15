/**
 * file: src/domain/checkout/service/order.service.ts
 * description: file responsible for the 'OrderService' class
 * data: 10/28/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Customer from "../../customer/entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import { v4 as uuid } from "uuid";

export default class OrderService {

  static totalOrders(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }

  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    // verificar e ver se o cliente possui pontos
    if (items.length === 0) {
      throw new Error("Order must have at least one item");
    }

    const order = new Order(uuid(), customer.id, items);
    customer.addRewardPoints(order.total() / 2);

    return order;
  }
}
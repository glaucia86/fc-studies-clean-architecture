/**
 * file: src/domain/customer/factory/customer.factory.spec.ts
 * description: file responsible for the Order class tests
 * data: 12/13/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { v4 as uuid } from "uuid";
import OrderFactory from "./order.factory";

describe('Order factory unit test', () => {

  it('should create an order', () => {

    const orderProps = {
      id: uuid(),
      customerId: uuid(),
      items: [
        {
          id: uuid(),
          name: "Product 1",
          productId: uuid(),
          quantity: 1,
          price: 100,
        }
      ]
    };

    const order = OrderFactory.create(orderProps);

    expect(order.id).toEqual(orderProps.id);
    expect(order.customerId).toEqual(orderProps.customerId);
    expect(order.items.length).toBe(1);
  });

});
/**
 * file: src/domain/customer/factory/customer.factory.ts
 * description: file responsible for the Order class
 * data: 12/13/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Order from "../entity/order";
import OrderItem from "../entity/order_item";

interface OrderFactoryProps {
  id: string;
  customerId: string;
  items: {
    id: string;
    name: string;
    productId: string;
    quantity: number;
    price: number;
  }[];
}

export default class OrderFactory {
  public static create(props: OrderFactoryProps): Order {

    const items = props.items.map((item) => {
      return new OrderItem(
        item.id,
        item.name,
        item.price,
        item.quantity,
        item.productId,
      );
    });

    return new Order(props.id, props.customerId, items)
  }
}
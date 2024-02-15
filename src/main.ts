/**
 * file: src/main.ts
 * description: file responsible for the main entry point of the application
 * data: 10/12/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Address from "./domain/customer/value-object/address";
import Customer from "./domain/customer/entity/customer";
import Order from "./domain/checkout/entity/order";
import OrderItem from "./domain/checkout/entity/order_item";

const customer = new Customer("1234", "Glaucia");
const address = new Address("Rua 7 de Setembro", 137, "Rio de Janeiro", "10795-295");

// ==> Agregado de ID
customer.Address = address;
customer.activate();

// ==> Agregado de Objeto do Item
const item1 = new OrderItem("1", "Item 1", 10, 2, "prodId-01");
const item2 = new OrderItem("2", "Item 2", 15, 3, "prodId-03");
const order = new Order("1", "1234", [item1, item2])

console.log(order);
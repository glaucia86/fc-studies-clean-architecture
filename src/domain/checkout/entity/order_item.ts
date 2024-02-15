/**
 * file: src/domain/checkout/entity/order_item.ts
 * description: file responsible for the Order Item class
 * data: 10/22/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default class OrderItem {
  private _id: string;
  private _productId: string; // Relacionamento entre as tabelas: OrderItem & Product
  private _name: string;
  private _price: number;
  private _quantity: number;

  constructor(id: string, name: string, price: number, quantity: number, productId: string) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._quantity = quantity;
    this._productId = productId;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get quantity(): number {
    return this._quantity;
  }

  get price(): number {
    return this._price;
  }

  get productId(): string {
    return this._productId;
  }

  orderItemTotal(): number {
    return this._price * this._quantity;
  }
}
/**
 * file: src/domain/checkout/repository/order-repository.interface.ts
 * description: file responsible for the Order Repository Interface
 * data: 11/27/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Order from "../entity/order";
import RepositoryInterface from "../../@shared/repository/repository-interface";

export default interface OrderRepositoryInterface extends
  RepositoryInterface<Order> { }
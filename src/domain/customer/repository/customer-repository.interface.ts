/**
 * file: src/domain/customer/repository/customer-repository.interface.ts
 * description: file responsible for the Customer Repository Interface
 * data: 11/22/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Customer from "../entity/customer";
import RepositoryInterface from "../../@shared/repository/repository-interface";

export default interface CustomerRepositoryInterface extends
  RepositoryInterface<Customer> { }
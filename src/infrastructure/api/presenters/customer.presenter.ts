/**
 * file: src/infrastructure/api/presenters/customer.presenter.ts
 * description: file responsible for the Customer Presenter
 * data: 04/18/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { toXML } from "jstoxml";
import { OutputListCustomerDto } from "../../../usecase/customer/list/list.customer.dto";

export default class CustomerPresenter {

  static toXML(data: OutputListCustomerDto): string {
    const xmlOption = {
      header: true,
      ident: "   ",
      newline: "\n",
      allowEmpty: true
    };

    return toXML({
      customers: {
        customer: data.customers.map(customer => ({
          id: customer.id,
          name: customer.name,
          address: {
            street: customer.address.street,
            number: customer.address.number,
            city: customer.address.city,
            zip: customer.address.zip
          },
        })),
      },
    }, xmlOption);
  }
}

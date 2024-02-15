/**
 * file: src/domain/customer/event/customer-address-change.event.ts
 * description: file responsible for the 'CustomerAddressChangedEvent' class
 * data: 12/07/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Address from "../value-object/address";
import EventInterface from "../../@shared/event/event.interface";

type dataChangeAddressCustomer = {
  id: string,
  name: string,
  address: Address,
}

export default class CustomerAddressChangeEvent implements EventInterface {
  dataTimeOccurred: Date;
  eventData: dataChangeAddressCustomer;

  constructor(eventData: dataChangeAddressCustomer) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }

  get dataAddress() {
    return this.eventData;
  }
}
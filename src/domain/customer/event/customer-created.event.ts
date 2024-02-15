/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * file: src/domain/customer/event/customer-created.event.ts
 * description: file responsible for the 'ProductCreatedEvent' class
 * data: 12/07/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import EventInterface from "../../@shared/event/event.interface";

export default class CustomerCreatedEvent implements EventInterface {
  dataTimeOccurred: Date;
  eventData: any;

  constructor(eventData: any) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}
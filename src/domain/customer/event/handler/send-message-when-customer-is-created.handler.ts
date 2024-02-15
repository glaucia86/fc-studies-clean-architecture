/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * file: src/domain/event/customer/handler/send-message-when-customer-is-created.handler.ts
 * description: file responsible for the 'SendMessageWhenCustomerIsCreatedHandler' class
 * data: 12/07/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */


import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendMessageWhenCustomerIsCreatedHandler implements EventHandlerInterface<CustomerCreatedEvent> {

  handle(event: CustomerCreatedEvent): void {
    console.log('Esse é o primeiro console.log do evento: "CustomerCreated"');
  }

}
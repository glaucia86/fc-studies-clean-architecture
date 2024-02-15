/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * file: src/domain/event/customer/handler/send-email-when-customer-is-created.handler.ts
 * description: file responsible for the 'SendEmailWhenCustomerIsCreatedHandler' class
 * data: 12/07/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendEmailWhenCustomerIsCreatedHandler implements EventHandlerInterface<CustomerCreatedEvent> {

  handle(event: CustomerCreatedEvent): void {
    console.log('Esse é o segundo console.log do evento...: "CustomerCreated"');
  }

}
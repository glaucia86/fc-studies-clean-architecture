/**
 * file: src/domain/product/event/handler/send-email-created.handler.ts
 * description: file responsible for the implementation of the class 'SendEmailWhenProductIsCreatedHandler'
 * data: 12/06/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import ProductCreatedEvent from "../product-created.event";

export default class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface<ProductCreatedEvent> {
  handle(event: ProductCreatedEvent): void {
    console.log(`Sending email to: ${event.eventData.name}`);
  }
}
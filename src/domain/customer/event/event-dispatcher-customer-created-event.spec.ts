/**
 * file: src/domain/customer/event/event-dispatcher-customer-created-event.spec.ts
 * description: file responsible for the 'EventDispatcherCustomerCreatedEvent' test
 * data: 12/07/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import EventDispatcher from "../../@shared/event/event-dispatcher";
import CustomerCreatedEvent from "./customer-created.event";
import SendEmailWhenCustomerIsCreatedHandler from "./handler/send-email-when-customer-is-created.handler";
import SendMessageWhenCustomerIsCreatedHandler from "./handler/send-message-when-customer-is-created.handler";

describe('Domain events tests for "CustomerCreatedEvent"', () => {

  it("should register an event handler for a Customer", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandlerSendMessage = new SendMessageWhenCustomerIsCreatedHandler();
    const eventHandlerSendEmail = new SendEmailWhenCustomerIsCreatedHandler();

    eventDispatcher.register("CustomerCreatedEvent", eventHandlerSendMessage);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerSendEmail);

    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"]).toBeDefined();
    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(2);
    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandlerSendMessage);
    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandlerSendEmail);
  });

  it("should unregister an event handler for a Customer", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandlerSendMessage = new SendMessageWhenCustomerIsCreatedHandler();
    const eventHandlerSendEmail = new SendEmailWhenCustomerIsCreatedHandler();

    eventDispatcher.register("CustomerCreatedEvent", eventHandlerSendMessage);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerSendEmail);

    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandlerSendMessage);
    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandlerSendEmail);

    eventDispatcher.unregister("CustomerCreatedEvent", eventHandlerSendMessage);
    eventDispatcher.unregister("CustomerCreatedEvent", eventHandlerSendEmail);

    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"]).toBeDefined();
    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(0);
  });

  it("should unregister all events handlers for a Customer", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandlerSendMessage = new SendMessageWhenCustomerIsCreatedHandler();
    const eventHandlerSendEmail = new SendEmailWhenCustomerIsCreatedHandler();

    eventDispatcher.register("CustomerCreatedEvent", eventHandlerSendMessage);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerSendEmail);

    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandlerSendMessage);
    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandlerSendEmail);

    eventDispatcher.unregisterAll();

    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"]).toBeUndefined();
  });

  it("should notify all events handlers for a Customer", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandlerSendMessage = new SendMessageWhenCustomerIsCreatedHandler();
    const eventHandlerSendEmail = new SendEmailWhenCustomerIsCreatedHandler();
    const spyEventHandlerSendMessage = jest.spyOn(eventHandlerSendMessage, "handle");
    const spyEventHandlerSendEmail = jest.spyOn(eventHandlerSendEmail, "handle");

    eventDispatcher.register("CustomerCreatedEvent", eventHandlerSendMessage);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerSendEmail);

    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandlerSendMessage);
    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandlerSendEmail);

    const customerCreatedEvent = new CustomerCreatedEvent({
      id: "1",
      name: "Glaucia Lemos",
      street: "Rua dos Bobos",
      number: 100,
      zipCode: "22222-222",
      city: "Rio de Janeiro",
    });

    eventDispatcher.notify(customerCreatedEvent);

    expect(spyEventHandlerSendMessage).toHaveBeenCalled();
    expect(spyEventHandlerSendEmail).toHaveBeenCalled();
  });
});
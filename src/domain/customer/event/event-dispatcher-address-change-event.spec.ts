/**
 * file: src/domain/customer/event/event-dispatcher-address-change-event.spec.ts
 * description: file responsible for the 'EventDispatcherCustomerCreatedEvent' test
 * data: 12/07/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Address from "../value-object/address";
import Customer from "../entity/customer";
import EventDispatcher from "../../@shared/event/event-dispatcher";
import CustomerAddressChangeEvent from "./customer-address-change.event";
import SendMessageWhenChangeAddressEventHandler from "./handler/send-message-when-change-address-event.handler";

describe('Domain events tests when a Customer changes address', () => {

  it("should notify when an event handler change address for a Customer", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandlerChangeAddress = new SendMessageWhenChangeAddressEventHandler();
    const spyEventHandlerWhenChangeAddress = jest.spyOn(eventHandlerChangeAddress, "handle");

    eventDispatcher.register("CustomerAddressChangeEvent", eventHandlerChangeAddress);

    const customer = new Customer("1", "Glaucia Lemos");
    const address = new Address("Rua dos Bobos", 100, "22222-222", "Rio de Janeiro");
    customer.Address = address;

    const newCustomerAddress = new CustomerAddressChangeEvent({
      id: customer.id,
      name: customer.name,
      address: address
    });

    eventDispatcher.notify(newCustomerAddress);

    expect(spyEventHandlerWhenChangeAddress).toHaveBeenCalled();
  })
});
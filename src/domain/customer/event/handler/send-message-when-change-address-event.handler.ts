/**
 * file: src/domain/customer/event/handler/send-message-when-change-address-event.handler.ts
 * description: file responsible for the 'SendMessageWhenChangeAddressHandler' class
 * data: 12/07/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */


import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerAddressChangeEvent from "../customer-address-change.event";

export default class SendMessageWhenChangeAddressEventHandler implements EventHandlerInterface<CustomerAddressChangeEvent> {

  handle(event: CustomerAddressChangeEvent): void {
    const { id, name, address } = event.dataAddress;

    console.log(`O cliente ${name} com o id: ${id} teve o seu endereço alterado para: ${address.toString()}`);
  }
}
/**
 * file: src/domain/@shared/event/event-handler.interface.ts
 * description: file responsible for the definition of the interface for the events.
 * data: 12/06/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import EventInterface from "./event.interface";

export default interface EventHandlerInterface<T extends EventInterface = EventInterface> {

  handle(event: T): void;

}
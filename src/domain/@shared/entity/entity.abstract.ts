/**
 * file: src/domain/@shared/entity/entity.abstract.ts
 * description: file responsible for the Entity class
 * data: 04/10/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Notification from '../notification/notification';

export default abstract class Entity {
  protected id: string;
  protected notification: Notification;

  constructor() {
    this.notification = new Notification();
  }
}

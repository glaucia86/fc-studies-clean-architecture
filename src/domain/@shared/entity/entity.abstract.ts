/**
 * file: src/domain/@shared/entity/entity.abstract.ts
 * description: file responsible for the Entity class
 * data: 04/15/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Notification from '../notification/notification';

export default abstract class Entity {
  protected _id: string
  public notification: Notification

  constructor() {
    this.notification = new Notification()
  }

  get id(): string {
    return this._id
  }
}

/**
 * file: src/domain/@shared/notification/notification.error.ts
 * description: file responsible for the class 'NotificationError'.
 * data: 04/15/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { NotificationErrorProps } from "./notification";

export default class NotificationError extends Error {
  constructor(public errors: NotificationErrorProps[]) {
    super();
  }
}

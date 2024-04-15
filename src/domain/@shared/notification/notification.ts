/**
 * file: src/domain/@shared/notification/notification.ts
 * description: file responsible for the class 'Notification'.
 * data: 04/09/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export type NotificationErrorProps = {
  message: string;
  context: string;
}

export default class Notification {
  private errors: NotificationErrorProps[] = [];

  addError(error: NotificationErrorProps): void {
    this.errors.push(error);
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  messages(context?: string): string {
    let message = "";
    this.errors.forEach((error) => {
      if (context === undefined || error.context === context) {
        message += `${error.context}: ${error.message},`;
      }
    });
    return message;
  }
}
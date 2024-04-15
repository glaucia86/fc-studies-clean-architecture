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

  addError(error: NotificationErrorProps) {
    this.errors.push(error);
  }

  messages(context?: string) {
    return this.errors
      .filter(error => error.context === context || !context)
      .map(error => `${error.context}: ${error.message},`)
      .join('');
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  getErrors(): NotificationErrorProps[] {
    return this.errors;
  }
}
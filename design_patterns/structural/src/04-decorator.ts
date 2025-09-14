import { COLORS } from "./helpers/colors.ts";
interface Notification {
  send(message: string): void;
}

// decorator class
abstract class NotificationDecorator implements Notification {
  protected notification: Notification;

  public constructor(notificationIn: Notification) {
    this.notification = notificationIn;
  }

  public send(message: string): void {
    this.notification.send(message);
  }
}

class BasicNotification implements Notification {
  public send(message: string): void {
    console.debug(`Sending basic notification: %c${message}`, COLORS.blue);
  }
}

class EmailNotification extends NotificationDecorator {
  private sendEmail(message: string): void {
    console.debug(`Sending email notification: %c${message}`, COLORS.pink);
  }

  public override send(message: string): void {
    super.send(message);
    this.sendEmail(message);
  }
}

class SmsNotification extends NotificationDecorator {
  private sendSms(message: string): void {
    console.debug(`Sending SMS notification: %c${message}`, COLORS.green);
  }

  public override send(message: string): void {
    super.send(message);
    this.sendSms(message);
  }
}

function main() {
  let notification: Notification = new BasicNotification();
  notification = new EmailNotification(notification);
  notification = new SmsNotification(notification);
  notification.send("Test notification - Alert message");
}

main();

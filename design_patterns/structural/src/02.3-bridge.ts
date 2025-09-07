import { COLORS } from "./helpers/colors.ts";

interface NotificationChannel {
  send(message: string): void;
}

class EmailChannel implements NotificationChannel {
  public send(message: string): void {
    console.debug(`Sending email: ${message}`);
  }
}

class SMSChannel implements NotificationChannel {
  public send(message: string): void {
    console.debug(`Sending SMS: ${message}`);
  }
}

class PushNotificationChannel implements NotificationChannel {
  public send(message: string): void {
    console.debug(`Sending Push: ${message}`);
  }
}

abstract class Notification {
  protected channels: NotificationChannel[];

  public constructor(channelsIn: NotificationChannel[]) {
    this.channels = channelsIn;
  }

  abstract notify(message: string): void;
  abstract addChannel(channel: NotificationChannel): void;
}

class AlertNotification extends Notification {
  public override notify(message: string): void {
    console.debug("\n%cAlert Notification:", COLORS.red);
    this.channels.forEach((channel: NotificationChannel) =>
      channel.send(message)
    );
  }
  public override addChannel(channel: NotificationChannel): void {
    this.channels.push(channel);
    console.debug(`Added channel: ${channel.constructor.name}`);
  }
}

function main() {
  const channels = [
    new EmailChannel(),
  ];

  const alert: AlertNotification = new AlertNotification(channels);

  alert.notify("Security alert: Unauthorized access detected.");

  alert.addChannel(new PushNotificationChannel());
  alert.notify("Security alert: Unauthorized access detected.");
}

main();

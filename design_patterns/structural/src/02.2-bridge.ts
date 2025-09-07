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
  protected channel: NotificationChannel; 

  public constructor(channelIn: NotificationChannel) {
    this.channel = channelIn;
  }

  abstract notify(message: string): void;
  abstract setChannel(channel: NotificationChannel): void;
}

class AlertNotification extends Notification {
  public notify(message: string): void {
    console.debug("\n%cAlert Notification:", COLORS.red);
    this.channel.send(message);
  }

  public setChannel(channel: NotificationChannel): void {
    this.channel = channel;
  }
}

class ReminderNotification extends Notification {
  public notify(message: string): void {
    console.debug("\n%cReminder Notification:", COLORS.blue);
    this.channel.send(message);
  }

  public setChannel(channel: NotificationChannel): void {
    this.channel = channel;
  }
}

class PushNotification extends Notification {
  public override notify(message: string): void {
    console.debug("\n%cPush Notification:", COLORS.green);
    this.channel.send(message);
  }

  public override setChannel(channel: NotificationChannel): void {
    this.channel = channel;
  }
}

function main() {
  const alert: AlertNotification = new AlertNotification(new EmailChannel());

  alert.notify("Security alert: Unauthorized access detected.");

  alert.setChannel(new SMSChannel());
  alert.notify("Security alert: Unauthorized access detected.");

  const reminder: ReminderNotification = new ReminderNotification(
    new SMSChannel()
  );
  reminder.notify(
    "Reminder: Your appointment with the doctor is tomorrow at 10:00 a.m."
  );

  reminder.setChannel(new PushNotificationChannel());
  reminder.notify(
    "Reminder: Your appointment with the doctor is tomorrow at 10:00 a.m."
  );

  const push: PushNotification = new PushNotification(
    new PushNotificationChannel()
  );
  push.notify("New update available. Click to install.");
}

main();

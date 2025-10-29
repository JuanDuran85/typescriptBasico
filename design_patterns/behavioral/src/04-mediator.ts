import { COLORS } from "./helpers/colors.ts";

class User {
  private userName: string;
  private chatRoom: ChatRoom;

  constructor(userName: string, chatRoom: ChatRoom) {
    this.userName = userName;
    this.chatRoom = chatRoom;

    chatRoom.addUser(this);
  }

  public receiveMessage(sender: User, message: string): void {
    console.debug(
      `The User: %c${this.userName}, receive message: %c${message}, from %c${sender.userName}`,
      COLORS.green,
      COLORS.blue,
      COLORS.red
    );
  }

  public sendMessage(message: string): void {
    console.debug(
      `Message: %c${message}, from User: %c${this.userName}`,
      COLORS.blue,
      COLORS.green
    );

    this.chatRoom.sendMessage(this, message);
  }
}

class ChatRoom {
  private users: User[] = [];
  public title: string;

  constructor(title: string) {
    this.title = title;
  }

  public addUser(user: User): void {
    this.users.push(user);
  }

  public sendMessage(sender: User, message: string): void {
    const usersToSendMessage: User[] = this.users.filter(
      (user) => user !== sender
    );

    for (const user of usersToSendMessage) {
      user.receiveMessage(sender, message);
    }
  }
}

function main() {
  const chatRoom: ChatRoom = new ChatRoom("Chat room 1");

  const user1: User = new User("User 1", chatRoom);
  const user2: User = new User("User 2", chatRoom);
  const user3: User = new User("User 3", chatRoom);

  user1.sendMessage("Hello everyone!");
  user2.sendMessage("I am the user 2");
  user3.sendMessage("Nice to meet you all!");
}

main();

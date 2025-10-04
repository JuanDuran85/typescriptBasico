import { COLORS } from "./helpers/colors.ts";

interface Document {
  displayContent(user: User): void;
}

class ConfidentialDocument implements Document {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  public displayContent(): void {
    console.debug(`Document Content: \n%c${this.content}\n`, COLORS.blue);
  }
}

class DocumentProxy implements Document {
  private document: Document;
  private mustHaveRole: string[];

  constructor(document: Document, mustHaveRole: string[] = []) {
    this.document = document;
    this.mustHaveRole = mustHaveRole;
  }

  public displayContent(user: User): void {
    if (this.mustHaveRole.includes(user.getRole())) {
      this.document.displayContent(user);
      return;
    }

    console.debug(
      `%cAccess denied. ${user.getName()}, you do not have sufficient permissions to view this document.`,
      COLORS.red
    );
  }
}

class User {
  private name: string;
  private role: "admin" | "user";

  constructor(name: string, role: "admin" | "user") {
    this.name = name;
    this.role = role;
  }

  public getName(): string {
    return this.name;
  }

  public getRole(): string {
    return this.role;
  }
}

function main() {
  const confidentialDoc: ConfidentialDocument = new ConfidentialDocument(
    "This is a top secret document. Handle with care!"
  );
  const proxy: DocumentProxy = new DocumentProxy(confidentialDoc, ["admin"]);

  const user1: User = new User("Juan", "user");
  const user2: User = new User("Ana", "admin");

  console.debug("\n Access for user 1:");
  proxy.displayContent(user1);

  console.debug("\n Access for user 2:");
  proxy.displayContent(user2);
}

main();

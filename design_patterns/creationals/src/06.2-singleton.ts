class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  private constructor() {}

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
      console.log("Creating new instance of DatabaseConnection");
    }
    return DatabaseConnection.instance;
  }

  public connect(): void {
    if (!this.connected) {
      this.connected = true;
      console.log("Connected to the database.");
      return;
    }
    console.log("Already connected to the database.");
  }

  public disconnect(): void {
    if (this.connected) {
      this.connected = false;
      console.log("Disconnected from the database.");
      return;
    }
    console.log("No active connection to disconnect.");
  }
}

function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect();

  const db2 = DatabaseConnection.getInstance();
  db2.connect();

  console.log("Are they equal?:", db1 === db2);

  db1.disconnect();

  db2.connect();
}

main();

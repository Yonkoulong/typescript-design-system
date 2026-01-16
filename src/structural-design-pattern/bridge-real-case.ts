interface Database {
  connect(): void;
  query(command: DbCommand): any;
  close(): void;
}

type DbCommand =
  | { type: "GetUser"; id: string }
  | { type: "FindUsers"; filter: any };

class PostgreSqlDatabase implements Database {
  connect(): void {
    console.log("Connecting to PostgresSql");
  }
  query(query: DbCommand) {
    console.log(`Executing query ${query}`);
  }
  close(): void {
    console.log("Disconect to PostgresSql");
  }
}

class MongoDBDatabase implements Database {
  connect(): void {
    console.log("Connecting to MongoDB");
  }
  query(query: DbCommand) {
    console.log(`Executing query ${query.type}`);
  }
  close(): void {
    console.log("Disconnect to MongoDB");
  }
}

abstract class DatabaseService {
  constructor(protected database: Database) {}

  abstract fetchData(query: DbCommand): void;
}

class ClientDataBaseService extends DatabaseService {
  public fetchData(query: DbCommand): void {
    this.database.close();
    this.database.query(query);
    this.database.close();
  }
}

let postgreService = new ClientDataBaseService(new PostgreSqlDatabase());
postgreService.fetchData({ type: "GetUser", id: "" });

let mongoDbService = new ClientDataBaseService(new MongoDBDatabase());
mongoDbService.fetchData({ type: "FindUsers", filter: "" });

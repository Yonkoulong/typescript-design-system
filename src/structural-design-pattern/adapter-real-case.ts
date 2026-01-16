class MySqlDatabase {
  public connectToMySQL(uri: string): void {
    console.log("Connecting MySQL with ", uri);
  }

  public executeMySQLQuery(query: string): void {
    console.log("Executing MySQL Query ", query);
  }
}

class PostgreSQLDatabase {
  public connectToPostgres(uri: string): void {
    console.log("Connecting Postgres with ", uri);
  }

  public executePostgresQuery(query: string): void {
    console.log("Executing Postgres Query ", query);
  }
}

class DatabaseAdapter {
  constructor(private database: PostgreSQLDatabase) {}

  public connectToMySQL(uri: string): void {
    this.database.connectToPostgres(uri);
  }

  public executeMySQLQuery(query: string): void {
    this.database.executePostgresQuery(query);
  }
}

// Client code
const database = new MySqlDatabase();
database.connectToMySQL("mysql://localhost:3306/mydb");
database.executeMySQLQuery("SELECT * FROM * USERS");

//5. Dependency Inversion Principle
// High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

interface Idatabase {
  save(data: string): void;
}

class MySqlDatabase implements Idatabase {
  save(data: string): void {
    console.log("MySql Save", data);
  }
}

class MongoDbDatabase implements Idatabase {
  save(data: string): void {
    console.log("MongoDB Save", data);
  }
}

export class HighLevelModule {
  constructor(private databse: Idatabase) {}

  execute(data: string) {
    this.databse.save(data);
  }
}

const mysql: MySqlDatabase = new MySqlDatabase();
const mongo: MongoDbDatabase = new MongoDbDatabase();

const user: HighLevelModule = new HighLevelModule(mysql);
user.execute("Long Ne!")

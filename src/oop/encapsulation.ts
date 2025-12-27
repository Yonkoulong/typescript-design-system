// Bank Account
// Depositing
// Withdrawing
// Balance

export class BankAccount {
  private _blance = 0;

  constructor(initialBalance: number) {
    this._blance = initialBalance;
  }

  public get currentMoney() {
    return console.log("Current Balance", this._blance);
  }

  public depositingMoney(money: number) {
    if (money < 0) {
      return console.log("Invalid money");
    }

    this._blance += money;
    this.currentMoney;
  }

  public withdrawingMoney(money: number) {
    if (money < 0) {
      return console.log("Invalid money");
    }

    if (this._blance < money) {
      return console.log("Insuficient funds");
    }

    this._blance -= money;
    this.currentMoney;
  }
}

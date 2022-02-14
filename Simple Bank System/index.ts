class Bank {
  accounts: number[];

  constructor(balance: number[]) {
    this.accounts = [...balance];
  }

  transfer(account1: number, account2: number, money: number): boolean {
    const sourceIndex = account1 - 1;
    const targetIndex = account2 - 1;
    const source = this.accounts[sourceIndex];
    const target = this.accounts[targetIndex];
    if (source && target && source > money) {
      this.accounts[sourceIndex] -= money;
      this.accounts[targetIndex] += money;
      // console.log(`Successfully sent ${money}$ to ${account2}`);
      return true;
    }
    return false;
  }

  deposit(account: number, money: number): boolean {
    const targetIndex = account - 1;
    const target = this.accounts[targetIndex];
    if (target) {
      this.accounts[targetIndex] = target + money;
      // console.log(`Successfully deposited ${money}$`);
      return true;
    }
    return false;
  }

  withdraw(account: number, money: number): boolean {
    const sourceIndex = account - 1;
    const source = this.accounts[sourceIndex];

    if (source) {
      this.accounts[sourceIndex] = source - money;
      // console.log(`Successfull withdraw for ${money}$`);
      return true;
    }
    return false;
  }
}

export default Bank;

import Bank from './index';

const bankSystem = new Bank([10, 100, 20, 50, 30]);

describe('bankSystem', () => {
  it('declines transaction if there is not enough money for transfer on the source account', () => {
    expect(bankSystem.transfer(3, 4, 100)).toBeFalsy();
  });
  it('can do a withdraw', () => {
    expect(bankSystem.withdraw(3, 10)).toBeTruthy();
    expect(bankSystem.accounts[2]).toEqual(10);
  });
  it('can send money to another account', () => {
    expect(bankSystem.transfer(5, 1, 20)).toBeTruthy();
    expect(bankSystem.accounts[4]).toEqual(10);
  });
  it('can deposit money to account', () => {
    expect(bankSystem.deposit(5, 40)).toBeTruthy();
    expect(bankSystem.accounts[4]).toEqual(50);
  });
});

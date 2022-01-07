export class Transaction {
  constructor(
    public balance: number,
    public amount: number,
    public description: string,
    public date: Date,
    public transactionType: string,
    public id?: string,
  ) {}
}

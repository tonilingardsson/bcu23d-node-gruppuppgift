export default class Blockchain {
  constructor() {
    this.chain = [];
    this.memberNodes = [];
    this.pendingTransactions = [];
  }
}
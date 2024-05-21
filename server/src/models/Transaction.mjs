import { v4 as uuid4 } from 'uuid';

export default class Transaction {
  constructror(amount, sender, recipient) {
    this.amount = amount;
    this.sender = sender;
    this.recipient = recipient;
    this.transactionId = uuid4().replaceAll('-', '');
  }
}

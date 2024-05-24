import { createHash } from "../utilities/crypto-lib.mjs";
import Block from "./Block.mjs";
import Transaction from "./Transaction.mjs";

export default class Blockchain {
  constructor() {
    this.chain = [];
    this.memberNodes = [];
    this.pendingTransactions = [];

    this.nodeUrl = process.argv[3];
  }

  createBlock(
    timestamp,
    prevBlockHash,
    currBlockHash,
    data,
    nonce,
    difficulty
  ) {
    const block = new Block(
      timestamp,
      this.chain.length + 1,
      prevBlockHash,
      currBlockHash,
      data,
      nonce,
      difficulty
    );
    this.pendingTransactions = [];
    this.chain.push(block);

    return block;
  }

  createTransaction(amount, sender, recipient) {
    return new Transaction(amount, sender, recipient);
  }

  addTransaction(transaction) {
    this.pendingTransactions.push(transaction);
    return this.getLastBlock().blockIndex + 1;
  }

  getLastBlock() {
    return this.chain.at(-1);
  }

  hashBlock(timestamp, prevBlockHash, currBlockHash, nonce, difficulty) {
    const stringToHash = timestamp.toString() +
      timestamp.toString() +
      prevBlockHash +
      JSON.stringify(currBlockHash) +
      nonce +
      difficulty;
    const hash = createHash()
  }
 }



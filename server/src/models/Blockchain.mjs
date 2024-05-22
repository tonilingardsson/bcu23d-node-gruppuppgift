import { createHash } from '../utilities/crypto-lib.mjs';
import Block from './Block.mjs';

export default class Blockchain {
  constructor() {
    this.chain = [Block.genesis];
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain.at(-1),
      data: data,
    });
    
    this.chain.push(newBlock);
    return newBlock;
  }

  replaceChain(chain) {
    if (chain.length <= this.chain.length) return;

    if (!Blockchain.validateChain(chain)) return;

    this.chain = chain;

  }

  static validateChain(chain) {
    // Rule 1: First block must have correct genesis block
    if (JSON.stringify(chain.at(0)) !== JSON.stringify(Block.genesis))
    return false;

    for (let i = 1; i < chain.length; i++) {
      const { timestamp, blockIndex, lastHash, hash, data, nonce, difficulty } = 
        chain.at(i);
      const currentLastHash = chain[i - 1].hash;
      const lastDifficulty = chain[i - 1].difficulty;

      // Rule 2: Check if lastHash is correct
      if (lastHash !== currentLastHash) return false;

      // Rule 3: Protection against large jumps in difficulty
      if (Math.abs(lastDifficulty - difficulty) > 1) return false;

      // Rule 4: Check if hash is correct
      const validHash = createHash(timestamp, lastHash, data, nonce, difficulty);
      if (hash !== validHash) return false;
    }

    return true;
  }
}
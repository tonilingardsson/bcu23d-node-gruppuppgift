import { it, describe, expect, beforeEach } from 'vitest';
import Block from '../src/models/Block.mjs';
import { GENESIS_DATA, MINE_RATE } from '../src/config/settings.mjs';
import hexToBinary from 'hex-to-binary';
import { createHash } from '../src/utilities/crypto-lib.mjs';

describe('Block', () => {
  const timestamp = Date.now();
  const blockIndex = 0;
  const lastHash = '0';
  const hash = '0';
  const nonce = 1;
  const difficulty = 1;
  
  // Dynamically decide the amount of votes to generate
  const generateVotes = (numQuestions) => {
    const votes = {};
    for (let i = 1; i <= numQuestions; i++) {
      votes['question${i}'] = 'choice${i}';
    }
    return votes;
  };

  const numQuestions = 5; // Change this number to generate different amount of questions
  const votes = generateVotes(numQuestions);

  const  data = {
    voterId: 'unique-voter-id',
    votes: votes
  };

  const block = new Block({
    timestamp: timestamp,
    blockIndex: blockIndex,
    lastHash: lastHash,
    hash: hash,
    data: data,
    nonce: nonce,
    difficulty: difficulty,
  });

  describe('Properties...', () => {
    it('Should have the properties timestamp, blockIndex, lasthash,hash, data,nonce & difficulty', () => {
      expect(block).toHaveProperty('timestamp');
      expect(block).toHaveProperty('blockIndex');
      expect(block).toHaveProperty('lastHash');
      expect(block).toHaveProperty('hash');
      expect(block).toHaveProperty('data');
      expect(block).toHaveProperty('nonce');
      expect(block).toHaveProperty('difficulty');
    });

    it('Should have values for each property...', () => {
      expect(block.timestamp).toBe(timestamp);
      expect(block.blockIndex).toBe(blockIndex);
      expect(block.lastHash).toBe(lastHash);
      expect(block.hash).toBe(hash);
      expect(block.data).toBe(data);
      expect(block.nonce).toBe(nonce);
      expect(block.difficulty).toBe(difficulty);
    });
  });

  describe('Genesis Block...', () => {
    const genesis = Block.genesis;
    
    it('Should return an instance of the Block class', () => {
      expect(genesis).toBeInstanceOf(Block);
    });

    it('Should return the genesis data', () => {
      expect(genesis).toEqual(GENESIS_DATA);
    });
  });

  describe('mineBlock() function...', () => {
    let lastBlock, data, minedBlock;

    beforeEach(() => {
      lastBlock = Block.genesis;
      data = {message: 'Demo data'};
      minedBlock = Block.mineBlock({ lastBlock, data });
    });

    it('Should return an instance of the Block class', () => {
      expect(minedBlock).toBeInstanceOf(Block);
    });

    it('Should add a timestamp', () => {
      expect(minedBlock.timestamp).not.toBeUndefined();
    });

    it('should set the lastHash to match the lastBlock hash', () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it('should set the data', () => {
      expect(minedBlock.data).toEqual(data);
    });

    it('should produce a hash that meets the difficulty level', () => {
      expect(
        hexToBinary(minedBlock.hash).substring(0, minedBlock.difficulty)
      ).toEqual('0'.repeat(minedBlock.difficulty));
    });

    it('should produce a hash based on correct input', () => {
      console.log(minedBlock);
      expect(minedBlock.hash).toEqual(
        createHash(
          minedBlock.timestamp,
          minedBlock.lastHash,
          data,
          minedBlock.nonce,
          minedBlock.difficulty
        )
      );
    });
  });

  describe('adjustDifficultyLevel', () => {
    it('should increase the difficulty for a quickly mined block', () => {
      console.log(block);
      expect(
        Block.adjustDifficultyLevel({
          block: block,
          timestamp: block.timestamp + MINE_RATE - 100,
        })
      ).toEqual(block.difficulty + 1);
    });

    it('should decrease the difficulty for a slowly mined block', () => {
      expect(
        Block.adjustDifficultyLevel({
          block: block,
          timestamp: block.timestamp + MINE_RATE + 100,
        })
      ).toEqual(block.difficulty - 1);
    });
  });
});
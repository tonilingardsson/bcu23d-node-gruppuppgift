// voting.test.mjs

import { describe, it, expect, beforeEach } from 'vitest';
import Voting from '../src/models/Voting.mjs';

describe('Voting', () => {
  let voting;

  beforeEach(() => {
    voting = new Voting();
  });

  it('should add a new vote to the chain', () => {
    const data = {voterId: 'voter1', votes: { question1: 'yes'}};
    voting.addVote(data);

    expect(voting.blockchain.chain.at(-1).data).toEqual(data);
  });

  it('should not allow a voter to vote more than once', () => {
    const data = {voterId: 'voter1', votes: { question1: 'yes' }};
    voting.addVote(data);

    expect(() => {
      voting.addVote(data);
    }).toThrow('Voter has already voted');
  });

  it('Should validate the vote chain', () => { 
    expect(voting.validateVoteChain()).toBe(true);  
  });

  it('Should count the votes correctly', () => {
    voting.addVote({voterId: 'voter1', votes: { question1: 'yes' }});
    voting.addVote({voterId: 'voter2', votes: { question1: 'no' }});
    voting.addVote({voterId: 'voter3', votes: { question1: 'yes' }});

    const expectedVoteCounts = {
      question1: {
        yes: 2,
        no: 1,
      }
    };

    expect(voting.countVotes()).toEqual(expectedVoteCounts);
  });
});
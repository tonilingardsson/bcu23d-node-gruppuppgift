// Voting.mjs
import Blockchain from './Blockchain.mjs';

export default class Voting {
  constructor() {
    this.blockchain = new Blockchain();
    this.voters = new Set();
  }

  addVote({ voterId, votes }) {
    if (this.voters.has(voterId)) {
      throw new Error('Voter has already voted');
    }

    const data = { voterId, votes };
    this.blockchain.addBlock({ data });
    this.voters.add(voterId);
  }

  validateVoteChain() {
    return Blockchain.validateChain(this.blockchain.chain);
  }

  countVotes() {
    const voteCounts = {};
  
    for (let i = 1; i < this.blockchain.chain.length; i++) {
      const { votes } = this.blockchain.chain[i].data;
      for ( const [question, choice] of Object.entries(votes)) {
        if (!voteCounts[question]) {
          voteCounts[question] = {};
        }
        if(!voteCounts[question][choice]) {
          voteCounts[question][choice] = 0;
        }
        voteCounts[question][choice]+= 1;
      }
    }
    return voteCounts;
  }
};
import { blockchain } from "../../startup.mjs";
import ErrorResponse from "../utilities/ErrorResponse.mjs";
import ResponseModel from "../utilities/ResponseModel.mjs";

export const getBlockchain = async (req, res, next) => {
  console.log('getBlockchain called');
  try {
      if (!blockchain || !blockchain.chain) {
          console.log('Blockchain not found or invalid');
          return res.status(404).json(new ResponseModel({ statusCode: 404, data: null, error: 'Blockchain not found or invalid' }));
      }
      console.log('Blockchain found:', blockchain.chain);
      res.status(200).json(new ResponseModel({ statusCode: 200, data: { chain: blockchain.chain } }));
  } catch (error) {
      console.error('Error fetching blockchain:', error);
      res.status(500).json(new ResponseModel({ statusCode: 500, error: error.message }));
  }
};

export const getBlockByIndexOrHash = async (req, res, next) => {
  const { identifier } = req.params;
  console.log('getBlockByIndexOrHash called with identifier:', identifier);

  try {
      let block;
      if (!isNaN(identifier)) {
          const index = parseInt(identifier, 10);
          block = blockchain.chain.find(b => b.blockIndex === index);
      } else {
          block = blockchain.chain.find(b => b.currBlockHash === identifier);
      }

      if (!block) {
          return res.status(404).json(new ResponseModel({ statusCode: 404, data: null, error: 'Block not found' }));
      }

      res.status(200).json(new ResponseModel({ statusCode: 200, data: block }));
  } catch (error) {
      console.error('Error fetching block:', error);
      res.status(500).json(new ResponseModel({ statusCode: 500, error: error.message }));
  }
};

export const createBlock = async (req, res, next) => {
  const lastBlock = blockchain.getLastBlock();
  const data = blockchain.pendingTransactions;
  const { nonce, difficulty, timestamp } = blockchain.proofOfWork(
    lastBlock.currBlockHash,
    data
  );

  const currBlockHash = blockchain.hashBlock(
    timestamp,
    lastBlock.currBlockHash,
    data,
    nonce,
    difficulty
  );

  const block = blockchain.createBlock(
    timestamp,
    lastBlock.currBlockHash,
    currBlockHash,
    data,
    nonce,
    difficulty
  );

  blockchain.memberNodes.forEach(async (url) => {
    const body = { block };
    await fetch(`${url}/api/v1/blockchain/block/broadcast`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(body);
  });

  const blockReward = {
    amount: 3,
    sender: '0000',
    recipient: blockchain.nodeUrl,
  };

  await fetch(
    `${blockchain.nodeUrl}/api/v1/transactions/transaction/broadcast`,
    {
      method: 'POST',
      body: JSON.stringify(blockReward),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  res.status(200).json(new ResponseModel({
    success: true,
    data: { message: 'Block created and broadcasted', block },
  }));
};

export const updateChain = (req, res, next) => {
  const block = req.body.block;
  const lastBlock = blockchain.getLastBlock();
  const hash = lastBlock.currBlockHash === block.prevBlockHash;
  const index = lastBlock.blockIndex + 1 === block.blockIndex;

  if (hash && index) {
    blockchain.chain.push(block);
    blockchain.pendingTransactions = [];
    res.status(201).json(new ResponseModel({
      success: true,
      statusCode: 201,
      data: {
        message: 'The block was added and sent to the network',
        block: block,
      },
    }));
  } else {
    res.status(500).json(new ErrorResponse({
      success: false,
      statusCode: 500,
      data: { message: 'The block was denied', block },
    }));
  }
};

export const syncChain = (req, res, next) => {
  const currLength = blockchain.chain.length;
  let maxLength = currLength;
  let longestChain = null;

  blockchain.memberNodes.forEach(async (node) => {
    const response = await fetch(`${node}/api/v1/blockchain`);
    if (response.ok) {
      const result = await response.json();

      if (result.data.chain.length > maxLength) {
        maxLength = result.data.chain.length;
        longestChain = result.data.chain;
      }

      if (
        !longestChain ||
        (longestChain && !blockchain.validateChain(longestChain))
      ) {
        console.log('You are synced');
      } else {
        blockchain.chain = longestChain;
      }
    }
  });

  res.status(200).json(new ResponseModel({
    success: true,
    statusCode: 200,
    data: { message: 'The synchronization is finished' },
  }));
};
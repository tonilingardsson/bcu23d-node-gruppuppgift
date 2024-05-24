import { blockchain } from "../../startup.mjs";
import ResponseModel from "../utilities/ResponseModel.mjs";

export const getBlockchain = async (req, res, next) => {
  res.status(200).json(new ResponseModel({ success: true, data: blockchain }));
};

export const createBlock = async (req, res, next) => {
  const lastBlock = blockchain.getLastBlock();
  const data = req.body;
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

  blockchain.blockchainNodes.forEach(async url => {
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

  await writeFileAsync(
    'logs',
    'blockchain.json',
    JSON.stringify(blockchain.chainOfBlocks, null, 2)
  );

  res.status(201).json(new ResponseModel({
    success: true,
    data: { message: 'Block created and broadcasted', block },
  }));
};
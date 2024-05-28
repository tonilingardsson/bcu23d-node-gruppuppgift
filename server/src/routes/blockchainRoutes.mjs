import express from 'express';
import {
  createBlock,
  getBlockchain,
  syncChain,
  updateChain,
  getBlockByIndexOrHash,
} from '../controllers/blockchainController.mjs';

const router = express.Router();

router.route('/').get(getBlockchain);
router.route('/mine').post(createBlock);
router.route('/concensus').get(syncChain);
router.route('/block/broadcast').post(updateChain);
router.route('/block/:identifier').get(getBlockByIndexOrHash);

export default router;

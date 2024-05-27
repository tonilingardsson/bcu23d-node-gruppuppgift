import express from 'express'
import presentTransactions from '../controllers/presentTransactions.mjs';
import { broadcastTransaction, createTransaction } from '../controllers/transactionController.mjs';

const router = express.Router();

router.route('/transaction').post(createTransaction);
router.route('/transaction/broadcast').post(broadcastTransaction);
router.route('/transactions').get(presentTransactions);

export default router;
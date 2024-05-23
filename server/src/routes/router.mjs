import express from 'express'
import presentTransactions from '../controllers/presentTransactions.mjs';

const router = express.Router();
router.route('/api/v1/transactions').get(presentTransactions);

export default router;
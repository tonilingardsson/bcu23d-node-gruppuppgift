import express from 'express'
import presentTransactions from '../controllers/presentTransactions.mjs';

const router = express.Router();
router.route('/transactions').get(presentTransactions);

export default router;
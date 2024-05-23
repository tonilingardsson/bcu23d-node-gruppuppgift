import express from 'express'

const router = express.Router();
router.route('/api/v1/transactions').get(presentTransactions);

export default router;
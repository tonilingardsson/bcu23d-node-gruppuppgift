import { transactionRepository } from "./transactionRepository.mjs";

const presentTransactions = async (req, res) => {
    const transactions = await transactionRepository.get();
    res.json(transactions)
};

export default presentTransactions;

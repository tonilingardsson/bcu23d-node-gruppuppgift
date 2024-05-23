import { transactionRepository } from "./transactionRepository.mjs";
import TransactionsView from "../../../client/src/pages/TransactionView.mjs";

const presentTransactions = async (req, res) => {
    const transactions = await transactionRepository.get();
    console.log(req.params);
    res.send(TransactionsView(transactions))
};

export default presentTransactions;

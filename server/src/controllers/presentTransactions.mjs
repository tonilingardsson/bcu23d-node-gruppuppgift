import { transactionRepository } from "./transactionRepository.mjs";
// TODO: add TransactionsView.mjs otherwise error
// import TransactionsView from "../../../client/src/pages/TransactionView.mjs";

const presentTransactions = async (req, res) => {
    const transactions = await transactionRepository.get();
    console.log(req.params);
    res.send(TransactionsView(transactions))
};

export default presentTransactions;

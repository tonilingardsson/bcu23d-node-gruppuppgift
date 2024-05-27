import { transactionRepository } from "./transactionRepository.mjs";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import TransactionsView from "../../../client/src/pages/transactionView.jsx";
// TODO: add TransactionsView.mjs otherwise error

const presentTransactions = async (req, res) => {
    const transactions = await transactionRepository.get();
    const html = ReactDOMServer.renderToString(<TransactionsView transactions={transactions} />);
    res.send(`<!DOCTYPE html>${html}`);
};

export default presentTransactions;

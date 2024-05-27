import { blockchain } from "../../startup.mjs";
import ResponseModel from "../utilities/ResponseModel.mjs";

export const createTransaction = (req, res, next) => {
    const transaction = req.body;

    const blockIndex = blockchain.addTransaction(transaction);

    res.status(201).json({
        status: true,
        statusCode: 201,
        data: { message: 'Transaction created', transaction, blockIndex },
    });
};

export const broadcastTransaction = (req, res, next) => {
    const transaction = blockchain.createTransaction(
        req.body.amount,
        req.body.sender,
        req.body.recipient
    );

    const blockIndex = blockchain.addTransaction(transaction);

    blockchain.memberNodes.forEach(async (url) => {
        await fetch(`${url}/api/v1/transaction/transaction`, {
            method: 'POST',
            body: JSON.stringify(transaction),
            headers: {
                "Content-Type": "application/json",
            }
        });
    });
};
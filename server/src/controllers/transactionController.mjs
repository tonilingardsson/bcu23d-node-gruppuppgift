import { blockchain } from "../../startup.mjs";

export const createTransaction = (req, res, next) => {
    const transaction = req.body;

    const blockIndex = blockchain.addTransaction(transaction);

    res
        .status(201)
        .json(
            new ResponseModel({
                statusCode: 201,
                data: { message: 'Transaction created', transaction, blockIndex },
            })
        );
};

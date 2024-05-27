export const presentTransactions = (transactions) => {
    if (transactions.length === 0) return "No current transactions";

    if (transactions.length === 1) return `There is one transaction: ${formatTransaction(transactions[0])}`;

    if (transactions.length === 2) return `There are two transactions: ${formatTransaction(transactions[0])}, ${formatTransaction(transactions[1])}`;

    const joinedTransactions = transactions.slice(0, -1).map(tx => formatTransaction(tx)).join(", ");
    const lastTransaction = formatTransaction(transactions.slice(-1)[0]);

    return `Transactions: ${joinedTransactions}, Last transaction: ${lastTransaction}`;
};

const formatTransaction = (transaction) => {
    return `Transaction ID: ${transaction.transactionId}, Amount: ${transaction.amount}, Sender: ${transaction.sender}, Recipient: ${transaction.recipient}`;
};

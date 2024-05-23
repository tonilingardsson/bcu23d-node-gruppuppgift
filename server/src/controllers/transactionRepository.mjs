const transactions = [
    {
        transactionId: 1, 
        amount: 100,
        sender: "Mikael Sundth",
        recipients: "Jelena Cefalu"
    },
    {
        transactionId: 2, 
        amount: 50,
        sender: "Marcus Brielazka",
        recipients: "Jelena Cefalu"
    }
];

export const transactionRepository = {
    get: async () => {
        return transactions;
    }
}
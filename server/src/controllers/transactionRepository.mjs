const transactions = [
    {
        transactionId: 1, 
        amount: 100,
        sender: "Mikael Sundth",
        recipient: "Jelena Cefalu"
    },
    {
        transactionId: 2, 
        amount: 50,
        sender: "Marcus Brielazka",
        recipient: "Jelena Cefalu"
    }
];

export const transactionRepository = {
    get: async () => {
        return transactions;
    }
}
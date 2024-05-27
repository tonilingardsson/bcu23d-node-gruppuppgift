const transactions = [
    {
        transactionId: 1,
        amount: 100,
        sender:"Mikael Sundh",
        recipient: "Jelena Cefalu"
    },
    {
        transactionId: 1,
        amount: 50,
        sender:"Marcus Brielazka",
        recipient: "Jelena Cefalu"
    }
]

export const transactionReposotory = {
    get: async() => {
        return transactions
    }
}
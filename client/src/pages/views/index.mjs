
const transactionView = (transactions) => `
    <html>
        <body style="display:flex; flex-direction: column; align-items: center; font-family: Helvetica; padding-top: 1rem;">
            <h1>Welcome to TX</h1>
            ${transactions.map(transaction => `
                <div style="border: 1px solid #ddd; padding: 1rem; margin: 0.5rem;">
                    <h2>Transaction Details</h2>
                    <p>Transaction ID: ${transaction.transactionId}</p>
                    <p>Amount: ${transaction.amount}</p>
                    <p>Sender: ${transaction.sender}</p>
                    <p>Recipient: ${transaction.recipient}</p>
                </div>
            `).join('')}
        </body>
    </html>
`;

export default transactionView;

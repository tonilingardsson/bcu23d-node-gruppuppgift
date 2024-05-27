

const TransactionView = (transactions) => `
    <html>
        <body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Helvetica', paddingTop: '1rem' }}>
            <h1>Welcome to TX</h1>
            {transactions.map(transaction => (
                <div key={transaction.transactionId} style={{ border: '1px solid #ddd', padding: '1rem', margin: '0.5rem' }}>
                    <h2>Transaction Details</h2>
                    <p>Transaction ID: {transaction.transactionId}</p>
                    <p>Amount: {transaction.amount}</p>
                    <p>Sender: {transaction.sender}</p>
                    <p>Recipient: {transaction.recipient}</p>
                </div>
            ))}
        </body>
    </html>`;

export default TransactionView;

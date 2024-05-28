import React, { useState } from 'react';

const FetchBlockchainButton = () => {
    const [blockchain, setBlockchain] = useState([]);
    const [error, setError] = useState(null);

    const fetchBlockchain = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/blockchain');
            console.log('Response:', response);

            const data = await response.json();
            console.log('Parsed JSON:', data);

            if (response.ok && data.success) {
                setBlockchain(data.data.chain);
            } else {
                throw new Error(`Failed to fetch blockchain: ${data.error || 'Unknown error'}`);
            }
        } catch (err) {
            console.error('Error fetching blockchain:', err.message);
            setError(err.message);
        }
    };

    return (
        <div>
            <button onClick={fetchBlockchain}>Fetch Blockchain</button>
            {error && <p>Error: {error}</p>}
            {blockchain.length === 0 ? (
                <p>No blocks in the blockchain.</p>
            ) : (
                <ul>
                    {blockchain.map((block, index) => (
                        <li key={index}>
                            <p>Index: {block.blockIndex}</p>
                            <p>Timestamp: {new Date(block.timestamp).toLocaleString()}</p>
                            <p>Previous Hash: {block.prevBlockHash}</p>
                            <p>Hash: {block.currBlockHash}</p>
                            <p>Nonce: {block.nonce}</p>
                            <p>Difficulty: {block.difficulty}</p>
                            <p>Transactions: {JSON.stringify(block.data)}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FetchBlockchainButton;

import React, { useState } from 'react';

const FetchBlockchainButton = () => {
    const [blockchain, setBlockchain] = useState([]);
    const [block, setBlock] = useState(null);
    const [error, setError] = useState(null);
    const [identifier, setIdentifier] = useState('');

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

    const fetchBlock = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/blockchain/block/${identifier}`);
            console.log('Response:', response);

            const data = await response.json();
            console.log('Parsed JSON:', data);

            if (response.ok && data.success) {
                setBlock(data.data);
            } else {
                throw new Error(`Failed to fetch block: ${data.error || 'Unknown error'}`);
            }
        } catch (err) {
            console.error('Error fetching block:', err.message);
            setError(err.message);
        }
    };

    return (
        <div className="blockchain-container">
            <button onClick={fetchBlockchain}>Fetch Blockchain</button>
            {error && <p>Error: {error}</p>}
            {blockchain.length === 0 ? (
                <p>No blocks in the blockchain.</p>
            ) : (
                <ul>
                    {blockchain.map((block, index) => (
                        <li key={index} className="block-item">
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

            <div className="fetch-block-container">
                <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Enter block index or hash"
                />
                <button onClick={fetchBlock}>Fetch Block</button>
                {block && (
                    <div className="block-item">
                        <p>Index: {block.blockIndex}</p>
                        <p>Timestamp: {new Date(block.timestamp).toLocaleString()}</p>
                        <p>Previous Hash: {block.prevBlockHash}</p>
                        <p>Hash: {block.currBlockHash}</p>
                        <p>Nonce: {block.nonce}</p>
                        <p>Difficulty: {block.difficulty}</p>
                        <p>Transactions: {JSON.stringify(block.data)}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FetchBlockchainButton;

import React, { useState } from 'react';

const FetchBlockchainButton = () => {
    const [blockchain, setBlockchain] = useState([]);
    const [block, setBlock] = useState(null);
    const [error, setError] = useState(null);
    const [identifier, setIdentifier] = useState('');

    const fetchBlockchain = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/blockchain');

            const data = await response.json();

            if (response.ok && data.success) {
                setBlockchain(data.data.chain);
                setBlock(null);
            } else {
                throw new Error(`Failed to fetch blockchain: ${data.error || 'Unknown error'}`);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchBlock = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/blockchain/block/${identifier}`);

            const data = await response.json();

            if (response.ok && data.success) {
                setBlock(data.data);
            } else {
                throw new Error(`Failed to fetch block: ${data.error || 'Unknown error'}`);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className={`blockchain-container ${block ? 'block-focused' : ''}`}>
            <div className="controls">
                <button onClick={fetchBlockchain}>Fetch Blockchain</button>
                <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Enter block index or hash"
                />
                <button onClick={fetchBlock}>Fetch Block</button>
            </div>
            {error && <p>Error: {error}</p>}
            <div className="blockchain-view">
                <div className="blockchain-list">
                    {blockchain.length === 0 ? (
                        <p>No blocks in the blockchain.</p>
                    ) : (
                        <ul>
                            {blockchain.map((blockItem, index) => (
                                <li key={index} className="block-item">
                                    <p>Index: {blockItem.blockIndex}</p>
                                    <p>Timestamp: {new Date(blockItem.timestamp).toLocaleString()}</p>
                                    <p>Previous Hash: {blockItem.prevBlockHash}</p>
                                    <p>Hash: {blockItem.currBlockHash}</p>
                                    <p>Nonce: {blockItem.nonce}</p>
                                    <p>Difficulty: {blockItem.difficulty}</p>
                                    <p>Transactions: {JSON.stringify(blockItem.data)}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {block && (
                    <div className="block-focused-view">
                        <div className="block-item focused">
                            <p>Index: {block.blockIndex}</p>
                            <p>Timestamp: {new Date(block.timestamp).toLocaleString()}</p>
                            <p>Previous Hash: {block.prevBlockHash}</p>
                            <p>Hash: {block.currBlockHash}</p>
                            <p>Nonce: {block.nonce}</p>
                            <p>Difficulty: {block.difficulty}</p>
                            <p>Transactions: {JSON.stringify(block.data)}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FetchBlockchainButton;

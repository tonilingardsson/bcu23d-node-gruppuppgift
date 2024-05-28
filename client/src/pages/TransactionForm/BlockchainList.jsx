import React, { useEffect, useState } from 'react';
import BlockItem from './BlockItem';

const BlockchainList = () => {
    const [blockchain, setBlockchain] = useState([]);
    const [error, setError] = useState(null);

    const fetchBlockchain = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/blockchain');
            if (!response.ok) {
                throw new Error('Failed to fetch blockchain');
            }
            const data = await response.json();
            if (Array.isArray(data)) {
                setBlockchain(data);
            } else {
                throw new Error('Fetched data is not an array');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchBlockchain();
    }, []);

    return (
        <div>
          <h1 className='separator'>=====================================</h1>
            <h2>Blockchain</h2>
            {error && <p>Error: {error}</p>}
            {blockchain.length === 0 ? (
                <p>No blocks in the blockchain.</p>
            ) : (
                <ul>
                    {blockchain.map((block, index) => (
                        <BlockItem key={index} block={block} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BlockchainList;

import React from 'react';

const BlockItem = ({ block }) => (
    <li>
        <p>Index: {block.index}</p>
        <p>Timestamp: {new Date(block.timestamp).toLocaleString()}</p>
        <p>Previous Hash: {block.previousHash}</p>
        <p>Hash: {block.hash}</p>
        <p>Nonce: {block.nonce}</p>
        <p>Difficulty: {block.difficulty}</p>
        <p>Transactions: {JSON.stringify(block.transactions)}</p>
    </li>
);

export default BlockItem;

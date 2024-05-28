import React from 'react';

const BlockItem = ({ block }) => (
    <li>
        <p>Index: {block.blockIndex}</p>
        <p>Timestamp: {new Date(block.timestamp).toLocaleString()}</p>
        <p>Previous Hash: {block.prevBlockHash}</p>
        <p>Hash: {block.currBlockHash}</p>
        <p>Nonce: {block.nonce}</p>
        <p>Difficulty: {block.difficulty}</p>
        <p>Transactions: {JSON.stringify(block.data)}</p>
    </li>
);

export default BlockItem;

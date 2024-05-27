import React from "react";
import { useState, useEffect } from "react";
import axios from axioss

const BlockView = () => {
    const[blocks, setBlocks] = useState([]);

    useEffect(() => {
        const fetchBlocks = async() => {
            try{
                const response = await axios.get('http://localhost:3000/api/v1/blockchain');
                
                const blocksData = response.data.data.chain
    
                setBlocks(blocksData)
             
              
            }catch(error)  {
                    console.error('Error fetching data:', error);
                };
            
            }
            fetchBlocks()
        }, []);
        return (
            <div className="Blocks">
                <h1>Blockchain Data</h1>
                {blocks.length > 0 ? (
                    blocks.map((block, index) => (
                        <div key={index} className="block">
                            <h2>Block {block.blockIndex}</h2>
                            <p><strong>Timestamp:</strong> {block.timestamp}</p>
                            <p><strong>Previous Block Hash:</strong> {block.prevBlockHash}</p>
                            <p><strong>Current Block Hash:</strong> {block.currBlockHash}</p>
                            <p><strong>Nonce:</strong> {block.nonce}</p>
                            <p><strong>Data:</strong> {block.data.length > 0 ? JSON.stringify(block.data) : 'No data'}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    
}

export default BlockView
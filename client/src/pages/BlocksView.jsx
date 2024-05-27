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
    return(
        <>
        </>
    )
}

export default BlockView
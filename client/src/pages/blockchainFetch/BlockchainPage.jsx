import React from 'react';
import FetchBlockchainButton from './FetchBlockchainButton';
import MineBlock from '../../components/MineBlock';


const BlockchainPage = () => {
    return (
        <div>
            <h1>Blockchain Page</h1>
            <FetchBlockchainButton />
           <MineBlock/>
        </div>
    );
};

export default BlockchainPage;

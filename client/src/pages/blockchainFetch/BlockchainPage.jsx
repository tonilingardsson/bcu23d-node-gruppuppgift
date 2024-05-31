import React from "react";
import FetchBlockchainButton from "./FetchBlockchainButton";
import MineBlock from "../../components/MineBlock";

const BlockchainPage = () => {
  return (
    <main>
      <h1>Blockchain Page</h1>
      <FetchBlockchainButton />
      <MineBlock />
    </main>
  );
};

export default BlockchainPage;

import React, { useState, useEffect } from "react";

const FetchBlockchainButton = () => {
  const [blockchain, setBlockchain] = useState([]);
  const [focusedBlock, setFocusedBlock] = useState(null);
  const [error, setError] = useState(null);
  const [identifier, setIdentifier] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);

  const fetchBlockchain = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/blockchain");
      const data = await response.json();

      if (response.ok && data.success) {
        setBlockchain(data.data.chain);
        setFocusedBlock(null); // Reset focused block when fetching the full blockchain
      } else {
        throw new Error(
          `Failed to fetch blockchain: ${data.error || "Unknown error"}`
        );
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchBlock = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/blockchain/block/${identifier}`
      );
      const data = await response.json();

      if (response.ok && data.success) {
        setFocusedBlock(data.data);
      } else {
        throw new Error(
          `Failed to fetch block: ${data.error || "Unknown error"}`
        );
      }
    } catch (err) {
      console.error("Error fetching block:", err.message);
      setError(err.message);
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const currentIndex = Math.floor(
        (scrollTop / (scrollHeight - clientHeight)) * blockchain.length
      );

      if (currentIndex !== scrollIndex) {
        setScrollIndex(currentIndex);
        if (focusedBlock) {
          const newFocusedBlock = blockchain[currentIndex];
          setFocusedBlock(newFocusedBlock);
        }
      }
    };

    const blockchainListElement = document.querySelector(".blockchain-list");
    if (blockchainListElement) {
      blockchainListElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (blockchainListElement) {
        blockchainListElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [blockchain, focusedBlock, scrollIndex]);

  return (
    <section className="blockchain">
      <div
        className={`blockchain-container ${
          focusedBlock ? "block-focused" : ""
        }`}
      >
        <div className="controls grid">
          <div className="column column1">
            <button onClick={fetchBlockchain}>Fetch Blockchain</button>
          </div>
          <div className="column column2">
            <button onClick={fetchBlock}>Fetch Block</button>
            <input
              className="block-index-input"
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Enter block index or hash"
            />
          </div>
        </div>
        {error && <p>Error: {error}</p>}
        <div className="blockchain-view">
          <div className="blockchain-list">
            {blockchain.length === 0 ? (
              <p className="centeredText">No blocks in the blockchain.</p>
            ) : (
              <ul>
                {blockchain.map(
                  (blockItem, index) =>
                    index !== blockchain.indexOf(focusedBlock) && (
                      <li key={index} className="block-item">
                        <p>Index: {blockItem.blockIndex}</p>
                        <p>
                          Timestamp:{" "}
                          {new Date(blockItem.timestamp).toLocaleString()}
                        </p>
                        <p>Previous Hash: {blockItem.prevBlockHash}</p>
                        <p>Hash: {blockItem.currBlockHash}</p>
                        <p>Nonce: {blockItem.nonce}</p>
                        <p>Difficulty: {blockItem.difficulty}</p>
                        <p>Transactions: {JSON.stringify(blockItem.data)}</p>
                      </li>
                    )
                )}
              </ul>
            )}
          </div>
          {focusedBlock && (
            <div className="block-focused-view">
              <div className="block-item focused">
                <p>Index: {focusedBlock.blockIndex}</p>
                <p>
                  Timestamp: {new Date(focusedBlock.timestamp).toLocaleString()}
                </p>
                <p>Previous Hash: {focusedBlock.prevBlockHash}</p>
                <p>Hash: {focusedBlock.currBlockHash}</p>
                <p>Nonce: {focusedBlock.nonce}</p>
                <p>Difficulty: {focusedBlock.difficulty}</p>
                <p>Transactions: {JSON.stringify(focusedBlock.data)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FetchBlockchainButton;

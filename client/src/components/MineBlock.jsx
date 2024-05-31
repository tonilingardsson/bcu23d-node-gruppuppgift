import React from "react";
import axios from "axios";

const MineBlock = () => {
  const addBlock = async () => {
    const result = await axios.post(
      "http://localhost:3001/api/v1/blockchain/mine"
    );
    console.log(result);
  };
  return (
    <section className="mineBlock">
      <p>Mine your Block</p>
      <button onClick={addBlock}>Mine Block</button>
    </section>
  );
};

export default MineBlock;

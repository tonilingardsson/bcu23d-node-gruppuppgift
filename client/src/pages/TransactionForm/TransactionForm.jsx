import React, { useState } from "react";
import InputField from "./InputField";

const TransactionForm = () => {
  const [amount, setAmount] = useState("");
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const transaction = {
      amount,
      sender,
      recipient,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/transactions/transaction/broadcast",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transaction),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage("Transaction broadcasted successfully.");
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleMineBlock = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/blockchain/mine",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage("Block mined successfully.");
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <main>
        <h1>Create Transaction</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <InputField
            label="Sender"
            type="text"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            required
          />
          <InputField
            label="Recipient"
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
          <button type="submit">Send Transaction</button>
        </form>
        {/* <button onClick={handleMineBlock}>Mine Block</button>
                {message && <p>{message}</p>} */}
      </main>
    </>
  );
};

export default TransactionForm;

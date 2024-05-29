import React, { useState } from 'react'
import InputField from '../TransactionForm/InputField';

const RegisterPage = () => {
    const [nodeUrl, setNodeUrl] = useState('http://localhost:3002');
    const [port, setPort] = useState('http://localhost:3001');
    const [message, setMessage] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        const registerNodeUrl = {
            nodeUrl
        };

        try {
            const blockchainResponse = await fetch('http://localhost:3001/api/v1/blockchain');
            const blockchain = await blockchainResponse.json();

            if (!blockchain.data.memberNodes.includes(nodeUrl) && blockchain.data.nodeUrl !== nodeUrl) {

                await fetch(`${port}/api/v1/members/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(registerNodeUrl),
                });

                setMessage(`Node "${nodeUrl}" registered successfully on port: ${port}`);

            } else {
                setMessage(`Node "${nodeUrl}" is already registered`);
            }

        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

  return (
    <div>
        <h1>Register your node</h1>
        <p>(remember to have your nodes up and running :p)</p>
        <form onSubmit={handleSubmit}>
                    <InputField
                        label="Register node"
                        type="text"
                        value={nodeUrl}
                        onChange={(e) => setNodeUrl(e.target.value)}
                        required
                    />
                    <InputField
                        label="on port"
                        type="text"
                        value={port}
                        onChange={(e) => setPort(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
                {message && <p>{message}</p>}
    </div>
  )
}

export default RegisterPage

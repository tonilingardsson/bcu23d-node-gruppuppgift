import express from 'express';
import cors from 'cors';
import transactionRoutes from './src/routes/transactionRoutes.mjs'
import blockchainRoutes from '../server/src/routes/blockchainRoutes.mjs';
import memberRoutes from './src/routes/memberRoutes.mjs';

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all requests
//ports 3000/ 3001/ 3002
const PORT = process.argv[2];

app.use('/api/v1/blockchain', blockchainRoutes);
app.use('/api/v1/members', memberRoutes);
app.use('/api/v1/transactions', transactionRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
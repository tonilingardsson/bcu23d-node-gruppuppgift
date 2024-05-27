import express from 'express';
import transactionRoutes from './src/routes/transactionRoutes.mjs'

//import errorHandler from './middlewares/errorHandler.mjs';
//import logHandler from './middlewares/logHandler.mjs';


import blockchainRoutes from '../server/src/routes/blockchainRoutes.mjs';
import memberRoutes from './src/routes/memberRoutes.mjs';


//import resourceNotFound from './utils/resourceNotFound.mjs';

const app = express();
app.use(express.json());

// const PORT = 3000;
const PORT = process.argv[2];
// app.use(logHandler);

app.use('/api/v1/blockchain', blockchainRoutes);
app.use('/api/v1/members', memberRoutes);
app.use('/api/v1/transactions', transactionRoutes);



//app.all('*', resourceNotFound);

//app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
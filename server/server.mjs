import express from 'express';
import transactionRoutes from './src/routes/transactionRoutes.mjs'

import router from './src/routes/router.mjs'
import presentTransactions from './src/controllers/presentTransactions.mjs';

//import errorHandler from './middlewares/errorHandler.mjs';
//import logHandler from './middlewares/logHandler.mjs';


import blockchainRoutes from '../server/src/routes/blockchainRoutes.mjs';
import memberRoutes from './src/routes/memberRoutes.mjs';


//import resourceNotFound from './utils/resourceNotFound.mjs';

const app = express();
app.use(express.json());

const PORT = process.argv[2];

app.use('/api/v1/transactions', router);

// app.use(logHandler);

app.use('/api/v1/blockchain', blockchainRoutes);
app.use('/api/v1/members', memberRoutes);
app.use('/api/v1/transactions', transactionRoutes);


router.route('/api/v1/transactions').get(presentTransactions)

//app.all('*', resourceNotFound);
//app.use(errorHandler);
app.use(router)


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html')); // Fallback to index.html
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
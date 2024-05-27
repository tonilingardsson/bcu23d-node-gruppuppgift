import express from 'express';
import router from './src/routes/router.mjs'
//import { PORT } from './startup.mjs';

//import errorHandler from './middlewares/errorHandler.mjs';
//import logHandler from './middlewares/logHandler.mjs';


import blockchainRoutes from '../server/src/routes/blockchainRoutes.mjs';
import memberRoutes from './src/routes/memberRoutes.mjs';


//import resourceNotFound from './utils/resourceNotFound.mjs';

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build'))); // Serve static files


app.use('/api/v1/transactions', router);

const PORT = 3000;
// app.use(logHandler);

app.use('/api/v1/blockchain', blockchainRoutes);
app.use('/api/v1/members', memberRoutes);


//app.all('*', resourceNotFound);

//app.use(errorHandler);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html')); // Fallback to index.html
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
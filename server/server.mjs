import express from 'express'
//import { PORT } from './startup.mjs';
import presentTransactions from './src/controllers/presentTransactions.mjs';

//import errorHandler from './middlewares/errorHandler.mjs';
//import logHandler from './middlewares/logHandler.mjs';

//import blockchainRoutes from './routes/blockchainRoutes.mjs';
//import membersRoutes from './routes/membersRoutes.mjs';

//import resourceNotFound from './utils/resourceNotFound.mjs';

const PORT = 3000;


const app = express();
app.use(express.json());
const router = express.Router()

// app.use(logHandler);

//app.use('/api/v1/blockchain', blockchainRoutes);
// app.use('/api/v1/members', membersRoutes);
router.route('/api/v1/transactions').get(presentTransactions)

//app.all('*', resourceNotFound);
//app.use(errorHandler);
app.use(router)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
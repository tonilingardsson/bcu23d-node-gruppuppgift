import presentTransactions from "../controllers/presentTransactions.mjs";

const transactionsRouter = express.Router()


transactionsRouter.get(presentTransactions);

export default transactionsRouter;
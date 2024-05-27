import view from "../../../client/src/pages/views/index.mjs";
import { transactionReposotory } from "./transactionsReposotory.mjs";

const presentTransactions = async(req, res) => {
    const transactions = await transactionReposotory.get();
    console.log(transactions);
    res.send(view(transactions))
}
 


export default presentTransactions; 

   
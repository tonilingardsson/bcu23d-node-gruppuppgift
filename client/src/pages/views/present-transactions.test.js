import { test, expect, describe } from 'vitest';
import { presentTransactions } from "./present-transactions.mjs";

describe("present transactions", () => {
    test(transactions.length === 0).equalTo('no current transactions')
})
export interface Transaction {
  // TODO
  id: Number;
  source: String;
  target: String;
  amount: Number;
  description: String;
}

/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 * 
 * This is how a transaction looks like.
 * 
 * {
 *   id: 1,
 *   source: 'A',
 *   target: 'B',
 *   amount: 300,
 *   description: 'tikkie'
 * }
 * 
 * Note:
 * - Create additional functions if required.
 * - Follow proper coding conventions and best practices.
 * - Make sure existing unit test passes.
 * - Write further unit tests to cover maximum code.
 *  
 * 
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */
export function findDuplicateTransactions(transactions: Transaction[]): Transaction[] {
  // TODO
  // This has been done just to make the test pass for now.
  const arr = [];
  transactions.filter(
    (trnsDtl, i) => {
      for (let j = 0; j < transactions.length; j++) {
        if (j != i) {
          let isSource = trnsDtl.source === transactions[j].source;
          let isTarget = trnsDtl.target === transactions[j].target;
          let isAmt = trnsDtl.amount === transactions[j].amount;
          let isDesc = trnsDtl.description === transactions[j].description;
          if (isSource && isTarget && isAmt && isDesc) {
            arr.push(trnsDtl);
          }
        }
      }
    }
  );
  return arr;
}
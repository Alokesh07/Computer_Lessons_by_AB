# JavaScript Practical Assessment: Personal Finance Budget and Transaction Ledger

**Difficulty:** Advanced  
**Technology:** Vanilla JavaScript  
**Topics:** Objects, arrays of objects, custom functions, validation, `find()`, `some()`, `push()`, `reduce()`, loops, monthly summaries, budget calculations, and derived account balances.

## 1. Problem Statement

You are developing a personal finance tracker that records account transactions and helps the account owner compare spending with monthly category budgets. The application must keep a transaction ledger, prevent duplicate transaction IDs, reject invalid transactions and expenses that exceed the available account balance, and calculate monthly totals and budget warnings from the stored data.

Monthly budgets are warnings, not spending limits: an expense may exceed a category budget as long as sufficient account funds are available. The report must clearly identify every category that is over budget.

Implement each operation as a reusable function. Do not hardcode the final account balance, monthly totals, category spending, or budget status.

## 2. Initial Data Structure

Use the month format `YYYY-MM`. Each transaction has a unique `id`, a `type` (`"income"` or `"expense"`), a positive numeric `amount`, a `category`, and a `month`.

```javascript
const financeAccount = {
    owner: "Sam",
    openingBalance: 2500,
    budgets: [
        { category: "Groceries", month: "2026-11", limit: 500 },
        { category: "Transport", month: "2026-11", limit: 250 },
        { category: "Utilities", month: "2026-11", limit: 300 },
        { category: "Dining", month: "2026-11", limit: 200 }
    ],
    transactions: [
        { id: "TXN001", type: "income", amount: 2000, category: "Salary", month: "2026-11" },
        { id: "TXN002", type: "expense", amount: 120, category: "Groceries", month: "2026-11" },
        { id: "TXN003", type: "expense", amount: 45, category: "Transport", month: "2026-11" }
    ]
};
```

## 3. Required Custom Functions

### Function 1: `calculateAccountBalance(account)`

- Start with `openingBalance`.
- Add every income transaction and subtract every expense transaction.
- Calculate from the transaction ledger rather than storing or hardcoding a current balance.
- Return the resulting balance.

### Function 2: `recordTransaction(account, transaction)`

- Validate the transaction object, non-empty ID and category, transaction type, positive finite amount, and valid `YYYY-MM` month.
- Reject a transaction when its ID already exists.
- For an expense, check the current balance before adding it; reject the expense if it would make the account balance negative.
- Add only valid transactions using `push()`.
- Do not reject an expense merely because it exceeds a category budget.
- Return a success result or a meaningful failure result.

### Function 3: `getTransactionsForMonth(account, month)`

- Return a new array containing only transactions for the requested month.
- Do not alter the original transaction ledger.
- Return an empty array if the account has no transactions for that month.

### Function 4: `calculateMonthlyTotals(transactions)`

- Calculate total income, total expenses, net amount, and transaction count for the provided transactions.
- Use `reduce()` or a loop.
- Return an object with `income`, `expenses`, `net`, and `transactionCount`.

### Function 5: `getBudgetStatus(account, month)`

- For each budget matching the requested month, calculate spending for that category and the remaining budget.
- Return a separate result array containing `category`, `limit`, `spent`, `remaining`, and `overBudget`.
- Include budget categories with no transactions and report their spending as `0`.
- Do not treat income as spending.

### Function 6: `createMonthlyFinanceReport(account, month)`

- Use the preceding functions to create a report containing the owner's name, requested month, current account balance, monthly totals, monthly transactions, and category budget statuses.
- Calculate report values from the ledger and budgets.

### Function 7: `displayMonthlyFinanceReport(report)`

Display the monthly income, expenses, net amount, current account balance, each category's spending and remaining budget, and whether each category is over budget.

## 4. Required Execution Sequence

After creating `financeAccount`, record these transactions in order:

```javascript
{ id: "TXN004", type: "income", amount: 400, category: "Freelance", month: "2026-11" }
{ id: "TXN005", type: "expense", amount: 180, category: "Groceries", month: "2026-11" }
{ id: "TXN006", type: "expense", amount: 60, category: "Dining", month: "2026-11" }
{ id: "TXN007", type: "expense", amount: 300, category: "Groceries", month: "2026-11" }
```

Then attempt the following transaction, which must be rejected because it exceeds the remaining account balance:

```javascript
{ id: "TXN008", type: "expense", amount: 5000, category: "Groceries", month: "2026-11" }
```

Finally:

1. Retrieve the `"2026-11"` transactions.
2. Calculate and display the monthly totals and budget status.
3. Create and display the complete monthly report.
4. Confirm the rejected `"TXN008"` transaction was not added to the ledger.

## 5. Expected Results

### Transaction results

- `TXN004` through `TXN007` are accepted.
- `TXN008` is rejected for insufficient funds.
- The ledger contains six transactions; the rejected transaction is not present.

### November totals

```text
Income: 2400
Expenses: 705
Net: 1695
Transaction count: 6
```

### Account balance

```text
Opening balance: 2500
Current account balance: 4195
```

### November budget status

| Category | Limit | Spent | Remaining | Over budget |
|---|---:|---:|---:|---|
| Groceries | 500 | 600 | -100 | true |
| Transport | 250 | 45 | 205 | false |
| Utilities | 300 | 0 | 300 | false |
| Dining | 200 | 60 | 140 | false |

The Groceries expense that raises spending above the budget is accepted because monthly limits generate warnings; they do not prevent spending.

## 6. Additional Constraints

1. Use `const` and `let`; do not use `var`.
2. Define each operation as a separate reusable function.
3. Pass the account and month as parameters rather than relying on unrelated global variables.
4. Use the transaction ledger as the source of truth for balances and reports.
5. Prevent duplicate IDs and negative account balances.
6. Do not mutate the ledger when generating a monthly report.
7. Keep budget warnings separate from the account-funds validation.
8. Do not hardcode expected totals or final balance.
9. Use plain JavaScript with no external libraries.

## 7. Deliverables

Submit the complete JavaScript source code, all seven required functions, calls in the prescribed order, readable monthly report output, and a short explanation of ledger-derived balances, expense validation, and budget warnings.

## 8. Evaluation Rubric

| Assessment area | Marks |
|---|---:|
| Account and transaction structure | 10 |
| Transaction validation and duplicate prevention | 20 |
| Balance calculation and insufficient-funds handling | 15 |
| Month filtering without ledger mutation | 10 |
| Monthly income, expense, and net totals | 15 |
| Category budgets and over-budget reporting | 20 |
| Output, constraints, and code quality | 10 |
| **Total** | **100** |

**Interviewer tip:** Check that balances are recalculated from the ledger, rejected transactions do not get appended, and exceeding a budget produces a warning without incorrectly rejecting an otherwise affordable expense.

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }

function createTransaction(transaction) {
    user.transactions.push(transaction)
    if (transaction.type === "credit") {
        user.balance += transaction.value
    } else if (transaction.type === "debit") {
        user.balance -= transaction.value
    }
}

function getAverageTransactionValue() {

    let sum = user.transactions.reduce((prev, cur) => prev + cur.value, 0)
    return (sum / user.transactions.length)

}

function getHigherTransactionByType(type) {
    const maxValue = (max, current) => Math.max(max.value, current.value)

    return user.transactions.filter(transaction => transaction.type == type).reduce(maxValue)
}

function getTransactionsCount() {
    let transactionTypes = user.transactions.reduce(function(types, transaction) {
        if (transaction.type in types) {
            types[transaction.type]++;
        } else {
            types[transaction.type] = 1;
        }
        return types;
    }, {});
    return transactionTypes;
}
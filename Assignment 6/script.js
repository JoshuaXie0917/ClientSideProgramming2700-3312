const expenses = [
    {name: "Lunch", category: "Food", amount: 12},
    {name: "Groceries", category: "Food", amount: 46.5},
    {name: "Bus Ticket", category: "Transport", amount: 2},
    {name: "Gym Pass", category: "Entertainment", amount: 10},
    {name: "Snack", category: "Food", amount: 40},
    {name: "Rent", category: "House", amount: 1000},
    {name: "Member of apps ", category: "Other", amount: 50},
];

function money(n){
    return "$" + n.tofixed(2);
}

console.log("All Expenses: ");
for (let exp of expenses){
    console.log(exp.name + "|" + exp.category + "|" + money(exp.amount));
}


function countTax(exp){
    return{
        name: exp.name,
        category: exp.category,
        amount: exp.amount * 1.15,
    };
}

const expensesWithTax = expenses.map(countTax);

console.log("\n With Tax");
expensesWithTax.forEach(function(exp){
    console.log(exp.name + "|" + money(exp.amount));
});

const foodExpenses = expenses.filter(function(exp){
    return exp.category === "Food";
});

console.log("\n Food Only");
foodExpenses.forEach(function(exp){
    console.log(exp.name + "|" + money(exp.amount));
});

const totalSpent = expenses.reduce(function(sum, exp){
    return sum + exp.amount;
}, 0);

console.log("\nTotal Spent: " + money(totalSpent));

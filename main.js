#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("\n \tWELCOME TO MUNTAHA'S CURRENCY CONVERTOR\n"));
// defining the list of currencies and their exchange rates
let exchange_rate = {
    USD: 1, // american
    EUR: 0.9, // european
    JYP: 113, // japanese
    CAD: 1.3, // canadian
    AUD: 1.65, // australian
    PKR: 277, // pakistani
};
// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellowBright("SELECT THE CURRENCY TO CONVERT FROM:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellowBright("SELECT THE CURRENCY TO CONVERT INTO:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.yellowBright("ENTER THE AMOUNT TO CONVERT:"),
    },
]);
// performing currency conversion by formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// conversion formula
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// displaying the converted amount
console.log(chalk.yellowBright.bold `\n\tCONVERTED AMOUNT: ${chalk.green(converted_amount.toFixed(2))}`);

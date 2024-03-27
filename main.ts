#!  /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000; //Dollar

let myPin = 9876;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  type: "number",
  message: "Enter your pin:",
});

if (pinAnswer.pin === myPin) {
  console.log("Pin is correct!!");

  let operationAnswer = await inquirer.prompt([
    {
      name: "Operation",
      type: "list",
      choices: ["Withdraw", "Fast Cash", "Deposit", "Balance Inquiry"],
      message: "Please select an Option:",
    },
  ]);

  if (operationAnswer.Operation === "Withdraw") {
    let withdrawAnswer = await inquirer.prompt({
      name: "withdraw",
      type: "number",
      message: "Enter the amount you want to withdraw:",
    });

    if (withdrawAnswer.withdraw > myBalance) {
        console.log("Insufficient balance. Cannot withdraw more than your current balance.");
    } else {
        myBalance -= withdrawAnswer.withdraw;
        console.log(`Your remaining balance is ${myBalance}`);
    }
} 
  else if (operationAnswer.Operation === "Fast Cash") {
    let fastCashAnswer = await inquirer.prompt({
      name: "fastCash",
      type: "list",
      choices: ["5000", "10000", "20000", "50000"],
      message: "Please select a fast cash option:",
    });
    if (fastCashAnswer.fastCash > myBalance) {
        console.log("Insufficient balance. Cannot withdraw more than your current balance.");
    } 
    else {
        myBalance -= fastCashAnswer.fastCash;
    console.log(`Your remaining balance is ${myBalance}`);
    }

 } 
 else if (operationAnswer.Operation === "Deposit") {
    let depositAnswer = await inquirer.prompt({
      name: "deposit",
      type: "number",
      message: "Enter the amount you want to deposit:",
    });
    myBalance += depositAnswer.deposit;
    console.log(`Your new balance is ${myBalance}`);

  } 
   else if (operationAnswer.Operation === "Balance Inquiry") {
    console.log(`Your balance is ${myBalance}`);
  } 
  console.log("Thank you for using our ATM service!");
} 
 else {
  console.log("Pin is incorrect!");
}

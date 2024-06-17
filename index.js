#! /usr/bin/env node   
import inquirer from "inquirer";
let Answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your first no: ",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second no: ",
    },
    {
        type: "list",
        name: "Operator",
        message: "select an Operator: ",
        choices: ["+", "-", "*", "/", "%"]
    },
]);
let { num1, num2, Operator } = Answer;
if (num1 && num2 && Operator) {
    let result = 0;
    if (Operator === "+") {
        result = num1 + num2;
    }
    else if (Operator === "-") {
        result = num1 - num2;
    }
    else if (Operator === "*") {
        result = num1 * num2;
    }
    else if (Operator === "/") {
        result = num1 / num2;
    }
    else if (Operator === "%") {
        result = (num1 / num2) * 100;
    }
    console.log("Your result is: ", result);
}
else {
    console.log("Please enter valid Data.");
}

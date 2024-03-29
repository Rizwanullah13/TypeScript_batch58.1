"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var x1 = await inquirer_1.default.prompt([
    {
        x1: "x1",
        message: "Enter first number",
        type: "input"
    }
]);
var x2 = await inquirer_1.default.prompt([
    {
        x2: "x2",
        message: "Enter second number",
        type: "input"
    }
]);
var operator = await inquirer_1.default.prompt([
    {
        operator: "operator",
        message: "Select Operator ( + , - , * , / )",
        type: "input"
    }
]);
if (operator == '+') {
    console.log("".concat(x1, " + ").concat(x2, " = ").concat(x1 + x2));
}
else if (operator == '-') {
    console.log("".concat(x1, " - ").concat(x2, " = ").concat(x1 - x2));
}
else if (operator == '*') {
    console.log("".concat(x1, " * ").concat(x2, " = ").concat(x1 * x2));
}
else if (operator == '/') {
    if (x2 == 0) {
        console.log("Division by zero is not allowed");
    }
    else {
        console.log("".concat(x1, " / ").concat(x2, " = ").concat(x1 / x2));
    }
}
else {
    console.log("Invalid Operator");
}

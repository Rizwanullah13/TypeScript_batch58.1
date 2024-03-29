import inquirer from "inquirer";
let x1 = await inquirer.prompt([
    {
       x1: "x1",
       message: "Enter first number",
       type: "input"
    }
])

let x2 = await inquirer.prompt([
    {
       x2: "x2",
       message: "Enter second number",
       type: "input"
    }
])

let operator = await inquirer.prompt([
    {
        operator: "operator",
       message: "Select Operator ( + , - , * , / )",
       type: "input"
    }
])


if (operator == '+') {
    console.log(`${x1} + ${x2} = ${x1 + x2}`);
} else if (operator == '-') {
    console.log(`${x1} - ${x2} = ${x1 - x2}`);
} else if (operator == '*') {
    console.log(`${x1} * ${x2} = ${x1 * x2}`);
} else if (operator == '/') {
    if (x2 == 0) {
        console.log("Division by zero is not allowed");
    } else {
        console.log(`${x1} / ${x2} = ${x1 / x2}`);
    }
} else {
    console.log("Invalid Operator");
}

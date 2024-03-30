import inquirer from "inquirer";
async function calculate() {
    let x1Response = await inquirer.prompt([
        {
            name: "x1",
            message: "Enter first number",
            type: "input"
        }
    ]);
    let x2Response = await inquirer.prompt([
        {
            name: "x2",
            message: "Enter second number",
            type: "input"
        }
    ]);
    let operatorResponse = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: "Select Operator",
            choices: ["+", "-", "*", "/"]
        }
    ]);
    const x1 = parseFloat(x1Response.x1);
    const x2 = parseFloat(x2Response.x2);
    const operator = operatorResponse.operator;
    if (operator === '+') {
        console.log(`${x1} + ${x2} = ${x1 + x2}`);
    }
    else if (operator === '-') {
        console.log(`${x1} - ${x2} = ${x1 - x2}`);
    }
    else if (operator === '*') {
        console.log(`${x1} * ${x2} = ${x1 * x2}`);
    }
    else if (operator === '/') {
        if (x2 === 0) {
            console.log("Division by zero is not allowed");
        }
        else {
            console.log(`${x1} / ${x2} = ${x1 / x2}`);
        }
    }
    else {
        console.log("Invalid Operator");
    }
}
calculate();

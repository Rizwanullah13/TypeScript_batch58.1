import inquirer from "inquirer";
let name = await inquirer.prompt([
    {
        name: "name",
        message: "Enter your name",
        type: "input"
    }
]);
console.log("Your Name is " + name.name);

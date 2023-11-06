//This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully,
// the ATM functionalities are unlocked. All the user data is generated randomly
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        name: "userID",
        type: "number",
        message: "Enter user ID",
    },
    {
        name: "pincode",
        type: "number",
        message: "Enter pin code:",
    },
    {
        type: "list",
        name: "transaction type",
        choices: ["with drawal", "fast cash"],
        message: "select your transaction",
    },
    {
        type: "list",
        name: "transaction amount ",
        choices: ["RS 1000", "RS 2000", "RS 3000", "RS 5000"],
        message: "enter your transaction amount",
    }
]);
console.log(answers);

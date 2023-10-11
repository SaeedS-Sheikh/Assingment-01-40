let userNames = ["Faizan", "Zeeshan", "Admin", "Usman", "Umer"];
for (let k = 0; k < userNames.length; k++) {
    if (userNames[k] === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
        break;
    }
    else {
        console.log(`Hello ${userNames[k]}, thank you for logging in again`);
    }
}
export {};

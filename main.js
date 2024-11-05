// ****************************************** Paola's imaginary Wheel of Doom ***********************************************

const readline = require('readline-sync');

const names = ["Abdul", "Ahmad", "Andy", "Divya", "Dmitri", "Egide", "Judith", "Maria", "Natalia"]; 

let pickedNames = [];

while (names.length > 0) {
    // Clear terminal for better readability
    console.clear();

    const randomIndex = Math.floor(Math.random() * names.length);  // Get random index 
    const randomName = names[randomIndex];  // Pick name at random index
    
    pickedNames.push(randomName);  // Add name to pickedNames
    console.log(`Picked Student: ${randomName}`);
    
    names.splice(randomIndex, 1);  // Remove picked name from original array
    console.log(`Remaining Students: ${names.join(", ")}`);
    
    if (names.length === 0) {
        console.log("No more students left :(");
        break;
    }

    const shouldContinue = readline.question("Do you want to pick another name, Paola? (y/n): ");
    if (shouldContinue.toLowerCase() !== 'y') {
        break;  // Exit loop when finished
    }
}

console.log("Session ended. Picked Students:", pickedNames.join(", "));
// let count = 0
// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }


let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total"); 

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function calculateSum() {
    let savedEntries = saveEl.textContent.split('-').filter(entry => entry.trim() !== '');
    let sum = 0;

    for (let i = 0; i < savedEntries.length; i++) {
        sum += parseInt(savedEntries[i].trim(), 10) || 0;
    }

    console.log("Sum of saved entries:", sum);

    // Display the sum in the total paragraph
    totalEl.textContent = "Total: " + sum;
}

console.log("Let's count people on the subway!");

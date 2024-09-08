// Calculate the Tip

let x = 275
let bill = x;
const tip = 50 <= x <= 300 ? x * 0.15 : x * 0.20;
console.log (tip)


// Output Details
console.log(`The bill was $${275}`);
console.log(`The tip was $${41.25} `);
console.log(`The total value is $${316.25}`);


// Create a function

function calculateTip = (bill) {
    let tip = [0.15, 0.20];
    let index = bill <= 50 ? 0 : (bill <= 100 ? 1 : 2 )
    let tip = bill * tip [index];
    return tip;
}

let bill = 100
let tip = tip(bill);
console.log (`The tip for a $${100} bill is $${tip}`)



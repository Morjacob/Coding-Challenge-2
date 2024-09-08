// Calculate the Tip

let x = 275
let bill = x;
const tip = 50 <= x <= 300 ? x * 0.15 : x * 0.20;
console.log (tip)


// Output Details
console.log(`The bill was $${bill}`);
console.log(`The tip was $${tip} `);
console.log(`The total value is $${bill + tip}`);


// Create a function

const calculateTip = (billAmount) => {
    const tipPercentages = (billAmount >= 50 && billAmount <= 300) ? 0.15 : 0.20;
    const tip = billAmount * tipPercentages;
    return tip;

}
const testBill = 100;
const calculatedTip = calculateTip(testBill);
console.log (`The tip for $${testBill} bill is $${calculatedTip}`);


// Utilize Arrays



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

const calculateTip = (bill) => {
    const tipPercentages = (bill >= 50 && bill <= 300) ? 0.15 : 0.20;
    const tip = bill * tipPercentages;
    return tip;

}
const testBill = 100
const tip = calculateTip(testBill);
console.log (`The tip for $${testBill} bill is $${tip.toFixed(2)}`);


// Utilize Arrays

const bills = [275, 40, 430];
const tips = bills.map(bill => calculateTip(bill));
console.log(tips);
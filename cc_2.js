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

const calculateTip = (bill) => {
    const tipPercentages = (bill >= 50 && bill <= 300) ? 0.15 : 0.20;
    const tip = bill * tipPercentages;
    return tip;

}
const testBill = 100;
const calculatedTip = calculateTip(testBill);
console.log (`The tip for a $${testBill} bill is $${calculatedTip}`);


// Utilize Arrays Using Test Data

let bills = [275, 40, 430];
const tips = bills.map(bill => calculateTip(bill));
const total = bills.map((bill,index) => bill + tips [index]);

console.log (`Data Set 1:`);
console.log(`Bills:`, bills);
console.log(`Tips:`,tips);
console.log(`Totals`, total);





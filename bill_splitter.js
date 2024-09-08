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

let bills1 = [275, 40, 430];
const tips1 = bills1.map(bills1 => calculateTip(bills1));
const total1 = bills1.map((bills1,index) => bills1 + tips1 [index]);

console.log (`Data Set 1:`);
console.log(`Bills:`, bills1);
console.log(`Tips:`,tips1);
console.log(`Totals`, total1);


let bills2 = [125, 555, 44];
const tips2 = bills2.map(bills2 => calculateTip(bills2));
const total2 = bills2.map((bills2,index) => bills2 + tips2 [index]);

console.log (`Data Set 2:`);
console.log(`Bills:`, bills2);
console.log(`Tips:`,tips2);
console.log(`Totals`, total2);


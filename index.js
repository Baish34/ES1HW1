const isBirthday = true;
let age = 25;

if (isBirthday) {
  age++;
}

console.log("Program 1:");
console.log(`Current Age: ${age}`);
console.log("\n");

let passengerAge = 60;
const ticketPrice = 100;
const discount = 15;

const discountedPrice = (ticketPrice * discount) / 100;

console.log("Program 2:");

if (passengerAge > 60) {
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else {
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log("\n");

let num1 = 25;
let num2 = 20;
let num3 = 15;

console.log("Program 3:");

if (num3 > num2 && num3 > num1) {
  console.log(`The third number ${num3} is the largest.`);
} else {
  console.log(`The third number ${num3} is not the largest.`);
}

console.log("\n");

const saree = 500;
const kurta = 300;
const jeans = 900;
const shoes = 400;

let totalCartPrice = saree + kurta + jeans + shoes;

let deliveryCharge = "";

if (totalCartPrice < 1999) {
  deliveryCharge = 99;
  totalCartPrice = totalCartPrice + deliveryCharge;
} else {
  deliveryCharge = "No Delivery Charge";
}

console.log("Program 4:\n");
console.log("Shopping Cart:");
console.log("-----------------------------------");
console.log(`Item: Saree, Price: ${saree}`);
console.log(`Item: Kurta, Price: ${kurta}`);
console.log(`Item: Jeans, Price: ${jeans}`);
console.log(`Item: Shoes, Price: ${shoes}`);
console.log("-----------------------------------");
console.log(`Delivery Charges: ${deliveryCharge}`);
console.log("-----------------------------------");
console.log(`Total Cart Price: ${totalCartPrice}`);

console.log("\n");
console.log("Program 5:");
let number = 2;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is Zero.");
}

console.log("\n");
console.log("Program 6:");

const marks1 = 85;
const marks2 = 90;
const marks3 = 78;

const student1 = "Rahul";
const student2 = "Priya";
const student3 = "Tine";

if (marks1 > marks2 && marks1 > marks3) {
  console.log(`Rahul has the highest marks: ${marks1}`);
} else if (marks2 > marks1 && marks2 > marks3) {
  console.log(`Priya has the highest marks: ${marks2}`);
} else {
  console.log(`Tina has the highest marks: ${marks3}`);
}

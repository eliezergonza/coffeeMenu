const coffeeMenu = require("./cofee_data.js");

//console.log(coffeeMenu);

//Print an array of all the drinks on the menu
const printName = (item) => {
  return item.name;
}
console.log(coffeeMenu.map(printName));

//Print an array of drinks that cost 5 and under.
const underFive = (item) => {
  return item.price <= 5;
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.table(itemsUnderFive);

//Print an array of drinks that are priced at an even number.
const evenItems = (item) => {
  return item.price % 2 == 0;
}
const itemsEven = coffeeMenu.filter(evenItems);
console.table(itemsEven);

//Print the total if you were to order one of every drink.
const findPriceArray = (item) => {
  return item.price;
}

const priceArray = coffeeMenu.map(findPriceArray);

const sumTotalCost = (accumulator, currentValue) => {
  return accumulator + currentValue;
}
const totalPrice = priceArray.reduce(sumTotalCost);
console.log("Total Cost: "+ totalPrice);

//Print an array with all the drinks that are seasonal.
const isSeasonal = (item) => {
  return item.seasonal == true;
}
const seasonalItems = coffeeMenu.filter(isSeasonal);
console.table(seasonalItems);

//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const isSeasonal2 = (item) => {
  return item.seasonal == true;
}
const seasonalItems2 = coffeeMenu.filter(isSeasonal2);
//console.table(seasonalItems2); // this works for the names only table
console.log(seasonalItems2.map(printName)); // this works for names only







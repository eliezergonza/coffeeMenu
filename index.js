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
const seasonalDrinks = coffeeMenu.filter(
  (drinkObject) => !drinkObject.seasonal
); // condition has to evaluate to true, even if you are trying to fetch non-seasonal drinks

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const drinksImported = seasonalDrinks.map((drinkObject) => {
  return drinkObject.name + " with imported beans";
});

// solution2
const drinksImported2 = seasonalDrinks.map((drinkObject) => {
  return drinkObject.name + " with imported beans";
});

console.log(drinksImported);


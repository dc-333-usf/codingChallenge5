//Task 1: Object properties. Customer profile scenario.
let object = {name: "John Doe", age: 35, email: "john.doe@email.com"}; //declaring customer information in this object
console.log(`Customer Name: ${object.name} \nCustomer Age: ${object.age} \nCustomer Email: ${object.email}`); //logging to console customer information using template literals, using \n to line break

//Task 2: Object methods. Order details scenario.
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing", //declare the standard properties
    displayOrder: function() { //create a function called displayOrder within object
        console.log(`Order ID: ${this.orderId}`); //use this to log the properties we declared earlier
        console.log(`Total Amount: ${this.totalAmount}`); //we can use "this." since it is within the object
        console.log(`Status: ${this.status}`);
    }
};
console.log(`Order info:`); //console log a title for the function, could also include this in the function itself
order.displayOrder(); //call the function

//Task 3: Array manipulation. Shopping cart scenario.
let cartItems = ["Shovel", "Lamp", "Wheelbarrow"]; //declare the array
 cartItems.push("Pickaxe"); //add item to the end
 cartItems.pop(); //take off item at the end
 cartItems.unshift("Axe"); //add item to the beginning
 cartItems.shift(); //remove item from beginning
console.log(cartItems); //log the array


//Task 4: Map method. Price adjustments scenario.
let prices = [100, 200, 300]; //declare array
let discountedPrices = prices.map(n => n * 0.9); //use .map method to create a new array with discounted product prices
console.log(discountedPrices); //log discounted prices

//Task 5: Filter method. Product availability.
let inventory = [4, 0, 10, 0, 15, 6, 0, 2]; //declare inventory
let updatedInventory = inventory.filter(num => num !== 0); //create a filtered array with only instances that are not zero
console.log(updatedInventory); //log the updated, filtered array

//Task 6: Reduce method. Revenue calculation scenario.
let sales = [500, 300, 200, 400]; //declare array for sales
console.log(`Total Sales: ${sales.reduce((acc, curr) => acc + curr, 0)}`); //log to the console the array after using the reduce method to add the values

//Task 7: find() method. Customer search scenario.
let customers = ["Alice", "Bob", "Charlie", "David"]; //declare the array
console.log(`User: ${customers.find(user => user === "Charlie")}`); //log to the console the method to find a specific name

//Task 8: Function declaration. Tax calculation scenario.
function calculateTax(amount, taxRate = 0.07) { //declare function, create a default 7% tax rate
    let tAmount = amount * taxRate; //the amount multiplied by the tax rate will return the amount of tax owed
    return tAmount; //return the amount of tax
}
console.log(calculateTax(100)); //calculate tax on 100 dollars, only need first argument because default is set

//Task 9: Function expression. Discount application scenario.
let applyDiscount = function(price, discount) { //create function expression
    let disPrice = price * (1 - discount); //calculate discounted price based on price multipled by 1 subtracted by the discount amount as a decimal
    return disPrice; //then return the discounted price
}
console.log(applyDiscount(100, 0.2)); //log to console a 20 percent discount on 100 dollars
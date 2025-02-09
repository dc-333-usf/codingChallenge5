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

 //Task 4: Map method. Product availability scenario
 let prices = [100, 200, 300]; //declare array
 let discountedPrices = prices.map(n => n * 0.9); //use .map method to create a new array with discounted product prices
 console.log(discountedPrices); //log discounted prices

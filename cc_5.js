//Task 1: Object properties. Customer profile scenario
let object = {name: "John Doe", age: 35, email: "john.doe@email.com"}; //declaring customer information in this object
console.log(`Customer Name: ${object.name} \nCustomer Age: ${object.age} \nCustomer Email: ${object.email}`); //logging to console customer information using template literals, using \n to line break

//Task 2: Object methods. Order details scenario
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
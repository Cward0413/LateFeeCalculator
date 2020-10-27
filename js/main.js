
function lateFeeCalc(){

    //prompt user for number of books
    var books = parseInt(prompt("How many books do you have checked out?"));

    // prompt user for number of dvds
    var dvd = parseInt(prompt("How many DvDs do you have checked out?"));

    // prompt user for number of late days
    var lateDays = parseInt(prompt("How many day late are you returning these items?"));

    // multiply books by 0.25
     books = books * 0.25;

    // multiply dvds by 0.50
     dvd = dvd * 0.50

    // add both products together
    // multiply sum by number of late days
    var total = ((books + dvd) * lateDays).toFixed(2);

    // output answer to user
    alert(`You owe $${total} for returning these items late.`);
}

function pizzaCalc(){

    // prompt user for toppings on the pizza
    // gather the total cost of the toppings
    var numToppings = parseInt(prompt("How many toppings do you want on the pizza?"));
    var toppingCost = 1.25 * numToppings

    // get the total cost of the pizza
    var totalCost = toppingCost + 15;

    // prompt the user for the amount of people in the order
    var numPeople = parseInt(prompt("How many people are part of this order?"));

    // divide the total cost by the amount of people
    var costPerPerson = (totalCost / numPeople).toFixed(2);

    // alert the user of the cost per person
    alert(`The cost of the pizza will be $${costPerPerson} per person.`);
}


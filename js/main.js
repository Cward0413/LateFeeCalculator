

function lateFeeCalc(){

    //prompt user for number of books
    var books = parseInt(prompt("How many books do you have checked out?"));

    // prompt user for number of dvds
    var dvd = parseInt(prompt("How many DvDs do you have checked out?"));

    // prompt user for number of late days
    var lateDays = parseInt(prompt("How many day late are you returning these items?"));

    // multiply books by 0.25
    var books = books * 0.25;

    // multiply dvds by 0.50
    var dvd = dvd * 0.50

    // add both products together
    // multiply sum by number of late days
    var total = (books + dvd) * lateDays;

    // output answer to user
    alert(`You owe $${total} for returning these items late.`);
}
$(document).ready(
    function(){

        //add event handlers
        $("#calculateFee").click(lateFeeCalc);
        $("#calculateCost").click(pizzaCalc);

        //all other functions (program logic)
        function lateFeeCalc(){

            //get input data
            var books = $("#books").val();
            books = parseFloat(books);
            var dvds = $("#dvds").val();
            dvds = parseFloat(dvds);
            var lateDays = $("#lateDays").val();
            lateDays = parseFloat(lateDays);

            //do the math
            books = books * 0.25;
            dvds = dvds * 0.50;
            var total = ((books + dvds) * lateDays).toFixed(2);

            // output answer to user
            $("#feeOutput").text(total);
            $("#feeText").css("display", "block");
        }

        function pizzaCalc(){

            // prompt user for toppings and people
            var numToppings = $("#numToppings").val();
            numToppings = parseFloat(numToppings);
            var numPeople = $("#numPeople").val();
            numPeople = parseFloat(numPeople);

            //do the math to get cost per person
            var totalCost = 15 + (numToppings * 1.25);
            var costPerPerson = (totalCost / numPeople).toFixed(2);

            // alert the user of the cost per person
            $("#priceOutput").text(costPerPerson);
            $("#costText").css("display","block");
        }

    }
)

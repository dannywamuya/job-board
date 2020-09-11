
$(document).ready(function () {
    $("button.findworker").click(function (event) {
        event.preventDefault();//prevents erasing of info after submitting
        let name = $("#name").val();//gets name input from user
        let email = $("#email").val(); //gets email input from user
        let category = $("#category").val(); //gets category input from user
        let jobdetails = $("#jobdetails").val(); //gets message input from user

        //confirms values have been retrieved for manipulation
        // alert(name);
        // alert(email);
        // alert(category);
        // alert(jobdetails);
        var client = ["name", "email", "category", "jobdetails"];
        alert(client)

        $("button.findjob").click(function (event) {
            event.preventDefault();//prevents erasing of info after submitting
            let workername = $("#workername").val();//gets name input from user
            let workeremail = $("#workeremail").val(); //gets email input from user
            let workercategory = $("#workercategory").val(); //gets category input from user
            let workerjobdetails = $("#workerjobdetails").val(); //gets message input from user

            var worker = ["workername", "workeremail", "workercategory", "workerjobdetails"];

            //confirms values have been retrieved for manipulation
            // alert(name);
            // alert(email);
            // alert(category);
            // alert(jobdetails);


            //shows various client's cards of category.
            //showing  Worker's  expertise details of work.
            // if (workercategory === "Electrician") {
            //     $("#cards1").show();
            //     $("#jobmessage1").append(jobdetails);
            // } else if (workercategory === "Carpenter") {
            //     $("#cards2").show();
            //     $("#jobmessage2").append(jobdetails);
            // } else if (workercategory === "Content creator") {
            //     $("#cards3").show();
            //     $("#jobmessage3").append(jobdetails);
            // } else if (workercategory === "Plumber") {
            //     $("#cards4").show();
            //     $("#jobmessage4").append(jobdetails);
            // } else if (workercategory === "Teacher") {
            //     $("#cards5").show();
            //     $("#jobmessage5").append(jobdetails);
            // } else if (workercategory === "Other") {
            //     $("#cards6").show();
            //     $("#jobmessage6").append(jobdetails);
            // } else if (category === "Electrician") {
            //     $("#workercards1").show();
            //     $("#cards1").hide();
            //     $("#workermessage1").append(jobdetails);
            // } else if (category === "Carpenter") {
            //     $("#workercards2").show();
            //     $("#workermessage2").append(jobdetails);
            // } else if (category === "Content creator") {
            //     $("#workercards3").show();
            //     $("#workermessage3").append(jobdetails);
            // } else if (category === "Plumber") {
            //     $("#workercards4").show();
            //     $("#workermessage4").append(jobdetails);
            // } else if (category === "Teacher") {
            //     $("#workercards5").show();
            //     $("#workermessage5").append(jobdetails);
            // } else if (category === "Other") {
            //     $("#workercards6").show();
            //     $("#workermessage6").append(jobdetails);
            // } else {
            //     alert("Choose a category!");
            // }
        });
    });
});




// var newOrder = new Getpizza(pname, psize, pcrust, ptopping, total);

//       $("#ordersmade").append(
//         '<tr><td id="pizzaname">' +
//           newOrder.name +
//           '</td><td id="pizzasize">' +
//           newOrder.size +
//           '</td><td id="pizzacrust">' +
//           newOrder.crust +
//           '</td><td id="pizzatopping">' +
//           newOrder.topping +
//           '</td><td id="totals">' +
//           newOrder.total +
//           "</td></tr>"
//       );
//       console.log(newOrder);
//     
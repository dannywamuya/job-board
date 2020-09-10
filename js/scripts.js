$(document).ready(function () {
    $("button.find").click(function (event) {
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


        //shows various cards of category.
        //showing  Client's details of work.
        if (category === "Electrician") {
            $("#cards1").show();
            $("#jobmessage1").append(jobdetails);
        } else if (category === "Carpenter") {
            $("#cards2").show();
            $("#jobmessage2").append(jobdetails);
        } else if (category === "Content creator") {
            $("#cards3").show();
            $("#jobmessage3").append(jobdetails);
        } else if (category === "Plumber") {
            $("#cards4").show();
            $("#jobmessage4").append(jobdetails);
        } else if (category === "Teacher") {
            $("#cards5").show();
            $("#jobmessage5").append(jobdetails);
        } else if (category === "Other") {
            $("#cards6").show();
            $("#jobmessage6").append(jobdetails);
        } else {
            alert("Choose a category!");
        }
    });
});
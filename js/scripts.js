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


        //shows various cards of category;
        if (category === "Electrician") {
            $("#cards1").show();
            $("#jobmessage").append();
        } else if (category === "Carpenter") {
            $("#cards2").show();
        } else if (category === "Content creator") {
            $("#cards3").show();
        } else if (category === "Plumber") {
            $("#cards4").show();
        } else if (category === "Teacher") {
            $("#cards5").show();
        } else if (category === "Other") {
            $("#cards6").show();
        } else {
            alert("Choose a category!");
        }
    });
});
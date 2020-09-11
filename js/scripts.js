$(document).ready(function () {
    $("button.findwork").click(function (event) {
        event.preventDefault();//prevents erasing of info after submitting
        let name = $("#client-name").val();//gets name input from user
        let email = $("#client-email").val(); //gets email input from user
        let clientcategory = $("#clientcategory").val(); //gets category input from user
        let clientdetails = $("#clientdetails").val(); //gets message input from user
        // shows various client's cards of category.
        // showing  Worker's  expertise details of work.
        if (clientcategory === "Electrician") {
            $("#cards1").show();
            $("#jobmessage1").append(clientdetails);
        } else if (clientcategory === "Carpenter") {
            $("#cards2").show();
            $("#jobmessage2").append(clientdetails);
        } else if (clientcategory === "Content creator") {
            $("#cards3").show();
            $("#jobmessage3").append(clientdetails);
        } else if (clientcategory === "Plumber") {
            $("#cards4").show();
            $("#jobmessage4").append(clientdetails);
        } else if (clientcategory === "Teacher") {
            $("#cards5").show();
            $("#jobmessage5").append(clientdetails);
        } else if (clientcategory === "Other") {
            $("#cards6").show();
            $("#jobmessage6").append(clientdetails);
        } else {
            alert("Choose a category!");
        }
    });
});
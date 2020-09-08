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

        if (category === "Electrician") {
            $("#cards1").show();
            // $("#jobmessage").append();
        }
    });
});
$(document).ready(function () {
    $("button.register").click(function (event) {
        event.preventDefault();//prevents erasing of info after submitting
        let name = $("#name").val();//gets name input from user
        // let email = $("#email").val(); //gets email input from user
        let category = $("#category").val(); //gets category input from user
        // let jobdetails = $("#jobdetails").val(); //gets message input from user

        //confirms values have been retrieved for manipulation
        // alert(name);
        // alert(email);
        // alert(category);
        // alert(jobdetails);


        //shows various cards of category.
        //showing  Client's details of work.
        if (category === "Electrician") {
            $("#cards1").show();
            $("#workerName").append(name);
        } else if (category === "Carpenter") {
            $("#cards2").show();
            $("#workerName2").append(name);
        } else if (category === "Content creator") {
            $("#cards3").show();
            $("#workerName3").append(name);
        } else if (category === "Plumber") {
            $("#cards4").show();
            $("#workerName4").append(name);
        } else if (category === "Teacher") {
            $("#cards5").show();
            $("#workerName5").append(name);
        } else if (category === "Other") {
            $("#cards6").show();
            $("#workerName6").append(name);
        } else {
            alert("Choose a category!");
        }
    });
});


function register () {
    var workers = [
    {
        workerName: $("#name").val(),
        workerJob:  $("#category").val()
    }
    ];

    let workers_serialized = JSON.stringify(workers);
    

    localStorage.setItem("workers", workers_serialized);
    
    let workers_deserialized = JSON.parse(localStorage.getItem("workers"));

    for (var i = 0; i < workers_deserialized.length; i++) {
    var output = '';      
    output = workers[i].workerName + ":" + workers[i].workerJob;
    myFunction(output);
    };

    // document.getElementById('preview').innerHTML = output;

    console.log(workers_deserialized);

    function myFunction(text) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById("preview").appendChild(node);
    }

};

